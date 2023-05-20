const FileUpload = () => {
    return (
        <>
        <div className="container-fileupload">
            <form action="/upload" method="post">
                <input type="file" name="fileAudio" id="" />
                <input type="submit" value="Upload" />
            </form>
        </div>
        </>
    )
}

export default FileUpload;