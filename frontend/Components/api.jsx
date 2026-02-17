const api_key = "BcWXZv-G_aFVaHB4ga8LSyrUH4zpZiaQtmxueJx_o_Q";
//logo image fetch

export async function fetchRandomImage() {
    const response = await fetch(`https://api.unsplash.com/search/photos?page=3&query=student&orientation=landscape&client_id=${api_key}`);
  
    if (!response.ok) {
      throw new Error(`Failed to fetch Unsplash image: ${response.status} ${response.statusText}`);
    }
  
    const data = await response.json();
    if (data.results && data.results.length > 0) {
        // Access the first result [0] and then its 'urls' object, then 'small' URL.
        return data.results[0].urls.raw; 
    } else {
        // Handle case where no images are found for the query
        throw new Error("No images found for the specified query.");
    }
}

export async function fetchRandomImage1() {
    const response = await fetch(`https://api.unsplash.com/search/photos?page=1&query=medical&orientation=landscape&client_id=${api_key}`);
  
    if (!response.ok) {
      throw new Error(`Failed to fetch Unsplash image: ${response.status} ${response.statusText}`);
    }
  
    const data = await response.json();
    if (data.results && data.results.length > 0) {
        // Access the first result [0] and then its 'urls' object, then 'small' URL.
        return data.results[1].urls.raw; 
    } else {
        // Handle case where no images are found for the query
        throw new Error("No images found for the specified query.");
    }
}

export async function fetchRandomImage2() {
    const response = await fetch(`https://api.unsplash.com/search/photos?page=2&query=medical&orientation=landscape&client_id=${api_key}`);
  
    if (!response.ok) {
      throw new Error(`Failed to fetch Unsplash image: ${response.status} ${response.statusText}`);
    }
  
    const data = await response.json();
    if (data.results && data.results.length > 0) {
        // Access the first result [0] and then its 'urls' object, then 'small' URL.
        return data.results[3].urls.raw; 
    } else {
        // Handle case where no images are found for the query
        throw new Error("No images found for the specified query.");
    }
}

export async function fetchRandomImage3() {
    const response = await fetch(`https://api.unsplash.com/search/photos?page=1&query=medical&orientation=landscape&client_id=${api_key}`);
  
    if (!response.ok) {
      throw new Error(`Failed to fetch Unsplash image: ${response.status} ${response.statusText}`);
    }
  
    const data = await response.json();
    if (data.results && data.results.length > 0) {
        // Access the first result [0] and then its 'urls' object, then 'small' URL.
        return data.results[4].urls.raw; 
    } else {
        // Handle case where no images are found for the query
        throw new Error("No images found for the specified query.");
    }
}

export async function fetchRandomImage4() {
    const response = await fetch(`https://api.unsplash.com/search/photos?page=3&query=medical&orientation=landscape&client_id=${api_key}`);
  
    if (!response.ok) {
      throw new Error(`Failed to fetch Unsplash image: ${response.status} ${response.statusText}`);
    }
  
    const data = await response.json();
    if (data.results && data.results.length > 0) {
        // Access the first result [0] and then its 'urls' object, then 'small' URL.
        return data.results[0].urls.raw; 
    } else {
        // Handle case where no images are found for the query
        throw new Error("No images found for the specified query.");
    }
}

export async function fetchRandomImage5() {
    const response = await fetch(`https://api.unsplash.com/search/photos?page=4&query=medical&orientation=landscape&client_id=${api_key}`);
  
    if (!response.ok) {
      throw new Error(`Failed to fetch Unsplash image: ${response.status} ${response.statusText}`);
    }
  
    const data = await response.json();
    if (data.results && data.results.length > 0) {
        // Access the first result [0] and then its 'urls' object, then 'small' URL.
        return data.results[0].urls.raw; 
    } else {
        // Handle case where no images are found for the query
        throw new Error("No images found for the specified query.");
    }
}

export async function fetchRandomImage6() {
    const response = await fetch(`https://api.unsplash.com/search/photos?page=1&query=medical&orientation=landscape&client_id=${api_key}`);
  
    if (!response.ok) {
      throw new Error(`Failed to fetch Unsplash image: ${response.status} ${response.statusText}`);
    }
  
    const data = await response.json();
    if (data.results && data.results.length > 0) {
        // Access the first result [0] and then its 'urls' object, then 'small' URL.
        return data.results[0].urls.raw; 
    } else {
        // Handle case where no images are found for the query
        throw new Error("No images found for the specified query.");
    }
}

export async function fetchRandomImage7() {
    const response = await fetch(`https://api.unsplash.com/search/photos?page=2&query=medical&orientation=landscape&client_id=${api_key}`);
  
    if (!response.ok) {
      throw new Error(`Failed to fetch Unsplash image: ${response.status} ${response.statusText}`);
    }
  
    const data = await response.json();
    if (data.results && data.results.length > 0) {
        // Access the first result [0] and then its 'urls' object, then 'small' URL.
        return data.results[0].urls.raw; 
    } else {
        // Handle case where no images are found for the query
        throw new Error("No images found for the specified query.");
    }
}

export async function fetchRandomImage8() {
    const response = await fetch(`https://api.unsplash.com/search/photos?page=6&query=medical&orientation=landscape&client_id=${api_key}`);
  
    if (!response.ok) {
      throw new Error(`Failed to fetch Unsplash image: ${response.status} ${response.statusText}`);
    }
  
    const data = await response.json();
    if (data.results && data.results.length > 0) {
        // Access the first result [0] and then its 'urls' object, then 'small' URL.
        return data.results[0].urls.raw; 
    } else {
        // Handle case where no images are found for the query
        throw new Error("No images found for the specified query.");
    }
}

export async function fetchRandomImage9() {
    const response = await fetch(`https://api.unsplash.com/search/photos?page=7&query=medical&orientation=landscape&client_id=${api_key}`);
  
    if (!response.ok) {
      throw new Error(`Failed to fetch Unsplash image: ${response.status} ${response.statusText}`);
    }
  
    const data = await response.json();
    if (data.results && data.results.length > 0) {
        // Access the first result [0] and then its 'urls' object, then 'small' URL.
        return data.results[0].urls.raw; 
    } else {
        // Handle case where no images are found for the query
        throw new Error("No images found for the specified query.");
    }
}
