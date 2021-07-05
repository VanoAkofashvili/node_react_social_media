import React from 'react'
import { Button } from '@material-ui/core'

const Uploader: React.FC = (props) => {
    return (
        <div>
             <input
              accept="image/*"
              style={{ display: "none" }}
              id="raised-button-file"
              multiple
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
export default Uploader