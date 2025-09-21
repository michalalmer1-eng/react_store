export function setLocalStorage(key, value) {
    try {
  localStorage.setItem(key, JSON.stringify(value));
    } 
    catch (error) {
  console.error("Error setting localStorage item:", error);
    }
}

export function getLocalStorage(key) {
    try {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
    } 
    catch (error) {
  console.error("Error getting localStorage item:", error);
  return null;
    }   
}