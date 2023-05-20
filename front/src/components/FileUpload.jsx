import axios from 'axios'
import {useState} from 'react'
const FileUpload = () => {
    const [file, setFile] = useState(null);
    const handle = async (e) => {
        console.log("Hello?");
        e.preventDefault()
        const formData = new FormData();
        formData.append("selectedFile", file);
        console.log(file);

        axios.post('/upload', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        })

        axios.get('/api').then(res => console.log(res.data)).catch(err => console.error(err))
    
    }

    const fileset = (e) => {
        setFile(e.target.files[0]);
    }
    return (
        <>
        <div className="container-fileupload">
            <form onSubmit={handle}>
                <input type="file" name="fileAudio" id="" onChange={fileset}/>
                <input type="submit" value="Upload" />
            </form>
        </div>
        </>
    )
}

export default FileUpload;