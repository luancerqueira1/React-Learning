
const generateId = () => {
   return `${(Math.floor(Math.random() * 100_000)).toString(16)}-${(Math.floor(Math.random() * 100_000)).toString(16)}`;
}
export const getFolders = async () => {
   return JSON.parse(localStorage.getItem('folders')) || [];
}; 

export const saveFolder = async (folderName) => {
   
   const folders = await getFolders();

   const newFolder = {
      id: generateId(),
      name: folderName,
      pins: []
   };

   folders.push(newFolder);
   localStorage.setItem('folders', JSON.stringify(folders))
   return newFolder;
}