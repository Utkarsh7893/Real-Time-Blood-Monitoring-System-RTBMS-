import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";



export default function FrontPage() {
  const mountRef = useRef(null);
  const heartGlowRef = useRef(0);
  const rafRef = useRef(null);
  const [isNight, setIsNight] = useState(true);
  const [selectedBlood, setSelectedBlood] = useState(null);
  const [pageVisible, setPageVisible] = useState(false);

  //navigation for login page____________________________________________

  const navigate=useNavigate();

  const handleNavigate=()=>{
    navigate('/login');
  }

// ____________________________________________
  // Remove auto night logic (you can add back if needed)
  useEffect(() => {
    setTimeout(() => setPageVisible(true), 50);
  }, []);

  useEffect(() => {
    let mounted = true;
    let heartMesh = null;
    let limeGlow = null;    // <- declare here so animate() can access it
    let renderer = null;
    let scene = null;
    let camera = null;
    let drops = null;
  
    (async () => {
      if (!mounted) return;
      const container = mountRef.current;
      if (!container) return;
  
      // clear previous canvas if any
      while (container.firstChild) {
        try { container.firstChild.remove(); } catch (e) {}
      }
  
      // renderer
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.setPixelRatio(window.devicePixelRatio || 1);
      renderer.setSize(container.clientWidth, container.clientHeight);
      container.appendChild(renderer.domElement);
  
      // scene & camera
      scene = new THREE.Scene();
      scene.background = new THREE.Color(isNight ? "#1b0d0d" : "#f2ded7");
  
      camera = new THREE.PerspectiveCamera(
        45,
        container.clientWidth / container.clientHeight,
        0.1,
        100
      );
      camera.position.set(0, 1.5, 6);
  
      // lights
      scene.add(new THREE.AmbientLight(0xffffff, isNight ? 0.6 : 1));
      const glowLight = new THREE.PointLight(isNight ? 0xff2020 : 0xff5050, 6, 22);
      glowLight.position.set(0, 0, 6);
      scene.add(glowLight);
  
      // drops
      const dropGeom = new THREE.SphereGeometry(0.05, 8, 8);
      const dropMat = new THREE.MeshStandardMaterial({
        color: isNight ? 0xff3e3e : 0xff6767,
        emissive: isNight ? 0x550000 : 0x330000,
        emissiveIntensity: 0.18,
      });
  
      drops = new THREE.Group();
      for (let i = 0; i < 260; i++) {
        const p = new THREE.Mesh(dropGeom, dropMat);
        const x = Math.random() * 14 - 7;
        const y = Math.random() * 10 - 5;
        const z = Math.random() * 8 - 4;
        p.basePos = { x, y, z };
        p.position.set(x, y, z);
        p.userData.wave = Math.random() * Math.PI * 2;
        drops.add(p);
      }
      scene.add(drops);
  
      // load model
      const loader = new GLTFLoader();
      const baseScale = 1.9;
  
      loader.load(
        "/models/human_heart.glb",
        (gltf) => {
          if (!mounted) return;
          heartMesh = gltf.scene;
  
          // scale and position
          heartMesh.scale.set(baseScale, baseScale, baseScale);
          heartMesh.position.set(0, 1.1, 0); // lower on screen
  
          scene.add(heartMesh);
  
          // create lime glow AFTER heart is added
          limeGlow = new THREE.PointLight(0x00ff66, 3.2, 6); // color, intensity, distance
          // put slightly in front of heart so it wraps visually
          limeGlow.position.set(0, 0.9, 0.907);
          scene.add(limeGlow);
  
          // optional: a subtle sphere to visualize glow (very low opacity)
          // const glowSphere = new THREE.Mesh(
          //   new THREE.SphereGeometry(1.1 * baseScale, 32, 32),
          //   new THREE.MeshBasicMaterial({ color: 0x00ff66, transparent: true, opacity: 0.04 })
          // );
          // glowSphere.position.copy(heartMesh.position);
          // scene.add(glowSphere);
        },
        undefined,
        (error) => console.error("Error loading heart model:", error)
      );
  
      // animation
      let glowFrame = 0;
      const animate = () => {
        glowFrame += 0.035;
        const beat = Math.abs(Math.sin(glowFrame * 1.6));
  
        // pulsing main glow (red)
        if (scene) {
          const redGlow = scene.children.find((c) => c.isPointLight && (c.color && c.color.getHex() === (isNight ? 0xff2020 : 0xff5050)));
          // we added glowLight earlier but not stored; above is defensive — we have glowLight in scope above if needed.
        }
  
        // update heartbeat scale and limeGlow intensity if heart exists
        if (heartMesh) {
          const scalePulseX = baseScale + beat * 0.12;
          const scalePulseY = baseScale + beat * 0.14;
          const scalePulseZ = baseScale + beat * 0.12;
          heartMesh.scale.set(scalePulseX, scalePulseY, scalePulseZ);
  
          // lime glow pulses with beat (guard against undefined)
          if (limeGlow) {
            limeGlow.intensity = 3.2 + beat * 2.5; // base 3.2, add pulse
            // optional slight Z wobble for visual richness:
            // limeGlow.position.z = 1.2 + Math.sin(glowFrame * 0.6) * 0.08;
          }
        }
  
        // animate drops
        if (drops) {
          drops.children.forEach((p) => {
            p.position.x = p.basePos.x + Math.sin(glowFrame * 0.12 + p.userData.wave) * 0.8;
            p.position.y = p.basePos.y + Math.sin(glowFrame * 0.18 + p.userData.wave) * 0.5;
            p.position.z = p.basePos.z + Math.cos(glowFrame * 0.15 + p.userData.wave) * 0.6;
          });
        }
  
        renderer.render(scene, camera);
        rafRef.current = requestAnimationFrame(animate);
      };
  
      animate();
  
      // resize
      const handleResize = () => {
        if (!container || !camera || !renderer) return;
        const w = container.clientWidth || window.innerWidth;
        const h = container.clientHeight || window.innerHeight;
        renderer.setSize(w, h);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      };
      window.addEventListener("resize", handleResize);
  
      // cleanup - remove listener on unmount
      // note: we will remove canvas and cancel RAF in outer cleanup below
    })();
  
    return () => {
      mounted = false;
      cancelAnimationFrame(rafRef.current);
  
      // remove renderer canvas and dispose
      const container = mountRef.current;
      if (container) {
        while (container.firstChild) {
          try { container.firstChild.remove(); } catch (e) {}
        }
      }
  
      // basic disposal (if renderer exists)
      try {
        if (rendererRef.current) {
          rendererRef.current.dispose();
          rendererRef.current = null;
        }
      } catch (e) {
        /* ignore */
      }
      window.removeEventListener("resize", () => {});
    };
  }, [isNight]);
  
  

  const bloodTypes = ["A+", "A−", "B+", "B−", "AB+", "AB−", "O+", "O−"];

  return (
    <div
      style={{
        ...S.page,
        ...(isNight ? S.pageNight : {}),
        opacity: pageVisible ? 1 : 0,
      }}
    >
      <div style={S.canvas} ref={mountRef}></div>

      <div style={S.header}>
        <h1 style={S.h1}>Donate blood - Save Lives🩸</h1>
        <h2 style={S.h2}>Your one action could save up to 3 lives.</h2>
      </div>

      <div style={S.glassBox}>
        <div style={S.brand}>REDNOVA</div>
        <button style={S.cta} onClick={handleNavigate}>Donate Now</button>
      </div>

      <div style={S.glassBox1}>
        <div style={S.footer} >Every heartbeat tells a story — a story of hope, resilience, and second chances. By donating blood, you become the lifeline someone is desperately waiting for. A single donation can save up to three lives, turning your kindness into a legacy of healing. Join us in giving the gift that truly matters — the gift of life.”</div>
      </div>
      
      <div style={S.footer}>Every 2 seconds, someone needs blood.</div>

      {/* 🌗 DAY / NIGHT TOGGLE BUTTON */}
      <button
        onClick={() => setIsNight(!isNight)}
        style={S.themeBtn(isNight)}
      >
        {isNight ? "☀️ Day Mode" : "🌙 Night Mode"}
      </button>


    </div>
  );
}

const S = {
  page: {
    width: "100%",
    height: "100vh",
    transition: "opacity 0.8s ease",
    position: "relative",
    overflow: "hidden",
    fontFamily: "'Space Grotesk', Inter, sans-serif",
    background: "linear-gradient(180deg,#f6e8e1,#f0dbd4,#e8cfc8)",
  },
  pageNight: {
    background: "radial-gradient(circle at center, #3a1414, #1f0b0b, #120606)",
  },
  canvas: {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
  },
  header: {
    textAlign: "center",
    paddingTop: 20,
    zIndex: 10,
    position: "relative",
  },
  h1: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "clamp(24px, 3vw, 42px)",
    fontWeight: 700,
    color: "#8B0000", // deep, bold red
    letterSpacing: "-0.02em",
  },
h2: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "clamp(12px, 2.5vw, 26px)", // slightly smaller than h1
    fontWeight: 600,
    color: "#B22222", // slightly brighter red for contrast
    letterSpacing: "-0.01em",
  },

  sub: {
    fontSize: "clamp(14px,1.6vw,20px)",
    color: "#7a3d3d",
    marginTop: 6,
  },
  bloodTypeContainer: {
    display: "flex",
    justifyContent: "center",
    gap: 12,
    marginTop: 22,
    flexWrap: "wrap",
    zIndex: 20,
    position: "relative",
    width: "100%",
  },
  bloodType: {
    padding: "10px 14px",
    borderRadius: 10,
    cursor: "pointer",
    fontSize: 17,
    backdropFilter: "blur(8px)",
    transition: "0.25s ease",
  },
  glassBox: {
    position: "absolute",
    top: "54.5%",
    left: "19.5%",
    transform: "translate(-50%, -50%)",
    width: 460,
    padding: "45px 30px",
    borderRadius: 18,
    background: "rgba(255,255,255,-0.1)",
    boxShadow: "0 22px 48px rgba(150,20,20,0.18)",
    backdropFilter: "blur(18px)",
    textAlign: "center",
    zIndex: 20,
  },
  glassBox1: {
    position: "absolute",
    top: "30%",
    left: "82%",
    transform: "translate(-50%, -50%)",
    height:220,
    width: 500,
    // padding: "45px 30px",
    borderRadius: 18,
    background: "rgba(255,255,255,-0.1)",
    boxShadow: "0 22px 48px rgba(150,20,20,0.18)",
    backdropFilter: "blur(18px)",
    textAlign: "center",
    zIndex: 10,
  },
  brand: {
    fontSize: 56,
    fontWeight: 900,
    background: "linear-gradient(90deg,#bd2f2f,#ff7272)",
    WebkitBackgroundClip: "text",
    color: "transparent",
    marginBottom: 28,
  },
  cta: {
    padding: "16px 42px",
    borderRadius: 14,
    border: "none",
    background: "linear-gradient(180deg,#d13434,#ac2222)",
    color: "#fff",
    fontWeight: 650,
    fontSize: 19,
    cursor: "pointer",
    transition: "transform .18s",
    boxShadow: "0 0 25px rgba(255,60,60,0.6)",
    animation: "pulse 2s infinite",
  },
  footer: {
    position: "absolute",
    bottom: 18,
    width: "100%",
    textAlign: "center",
    fontSize: 18,
    fontWeight: 900,
    color: "#FFF5E6",
    opacity: 0.9,
    letterSpacing: "-0.015em",
  },

  // 🌗 THEME SWITCH BUTTON
  themeBtn: (isNight) => ({
    position: "absolute",
    right: 20,
    bottom: 20,
    padding: "12px 20px",
    borderRadius: 14,
    border: "2px solid rgba(255,255,255,0.4)",
    background: isNight
      ? "linear-gradient(135deg, #ffffff22, #ffffff08)" 
      : "linear-gradient(135deg, #4b2b2b, #6b3b3b)",
    color: isNight ? "#fff" : "#fceaea",
    backdropFilter: "blur(10px)",
    fontSize: 16,
    fontWeight: 700,
    cursor: "pointer",
    transition: "0.3s ease",
    boxShadow: isNight
      ? "0 0 12px rgba(255,255,255,0.25)"
      : "0 0 14px rgba(120,0,0,0.35)",
    zIndex: 30,
  })
  
};
