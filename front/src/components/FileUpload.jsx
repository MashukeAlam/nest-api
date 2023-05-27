import React,{ ChangeEvent, useState } from "react";
import axios from "axios";
const FileUpload = () => {
    const [file, setFile] = useState(null);

    const onChange = (file) => {
        const { files } = file.target;
        if (files && files.length !== 0) {
          setFile(files[0]);
        }
    }

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('fileAudio', file)
        const upload = await axios({
            url:"http://localhost:3333/upload",
            method:"post",
            
            data:formData
        }).then(r => r);

        console.log(upload);
        
    }
    return (
        <>
            <div className="flex flex-col bg-cyan-500 rounded-3xl p-6 m-6 w-fit hover:rounded-xl">
                <form onSubmit={e => e.preventDefault()}>
                    <input type="file" onChange={onChange} />
                    <button className="style-btn" onClick={handleUpload}>upload</button>
                </form>
            </div>
        </>
    )
}

export default FileUpload;