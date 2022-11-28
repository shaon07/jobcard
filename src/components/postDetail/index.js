import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import * as React from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "90%",
  maxWidth: "700px",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  p: 4,

};

export default function PostDetail({ data, postDetailOpen, handlePostDetailClose }) {
  return (
    <Modal
      open={postDetailOpen}
      onClose={handlePostDetailClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h4" component="h2">
          {data.jobTitle} - {data.jobType}
        </Typography>
        <Typography id="modal-modal-title" variant="p" sx={{ mt: 1 }} component="p">
          Posted : {data.postDate}
        </Typography>
        <Typography id="modal-modal-title" variant="p" sx={{ mt: 1 }} component="p">
          Level : {data.level}
        </Typography>
        <Typography id="modal-modal-title" variant="p" sx={{ mt: 1 }} component="p">
          Shift : {data.shift}
        </Typography>
        <Typography id="modal-modal-title" variant="p" sx={{ mt: 1 }} component="p">
          Location : {data.location}
        </Typography>
        <Typography id="modal-modal-title" variant="p" sx={{ mt: 1 }} component="p">
          vacancies : {data.vacancies}
        </Typography>
        <Typography id="modal-modal-title" variant="p" sx={{ mt: 1 }} component="p">
          Deadline : {data.lastDateOfApply}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 1 }}>
          {data.jobDescription}
        </Typography>
      </Box>
    </Modal>
  );
}
