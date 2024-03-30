import { useRef } from "react"
import "./App.css"
import { storage } from "./appwrite"
import { ID } from "appwrite"

const App = () => {

  const fileRef: any = useRef()

  // many more functions are available i documentation 
  // like upload buffer, stream, text, 
  // from file path and many more

  const uploadFile = async () => {

    const file = fileRef.current.files[0];

    if (!file) {
      console.error('No file selected');
      return;
    }

    const promise = storage.createFile(
      '66087e0d0a15c9036faf', // bucket id
      ID.unique(),
      file
    );

    promise.then(function (response: any) {
      console.log(response); // uploaded

      // getting the url

      const result = storage.getFilePreview(
        '66087e0d0a15c9036faf', // bucket id
        response.$id // uploaded file id
      );

      console.log(result.href) // here is the uploaded file url

    }, function (error: any) {
      console.log(error); // Failure
    });

  };

  return (
    <>
      <div>
        <h2>Appwrite File Upload</h2>
        <input type="file" ref={fileRef} />
        <button onClick={uploadFile}>Upload</button>
        <h3>Thanks for visiting regards <span>Abdul Ahad &copy;</span></h3>
      </div>
    </>
  )
}

export default App