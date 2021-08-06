import React, { useRef } from 'react'
import { Button } from '@material-ui/core'

const FileInput: React.FC = (props) => {
    const imageRef = useRef([])

  const handleChange =(e: React.ChangeEvent<HTMLInputElement>) => console.log(e.target.files)
    return (
        <div>
             <input
              accept="image/*"
              style={{ display: "none" }}
              id="raised-button-file"
              multiple
              // ref={imageRef}
              onChange={handleChange}
              type="file"
            />
            <label htmlFor="raised-button-file">
              <Button
                component="span"
              >
                  UPLOAD Image
                {/* <PanoramaOutlinedIcon fontSize="large"/> */}
              </Button>
            </label>
        </div>
    )
}
export default FileInput