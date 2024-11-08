import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';
import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { updateTask } from '../utils';

export  const EditTodo=({open,setOpen,task,id})=>{
    const [updatedTask,setUpdatedTask] = useState(task)
    const queryClient = useQueryClient()
  const handleClose = () => {
    setOpen(false);
  };

  const handleUpdate=async()=>{
    await updateTask(id,{task:updatedTask})
    queryClient.invalidateQueries('todos')//felület frissítése
    handleClose()
  }

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Edit task
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <TextField id="outline-basic" label="Outlined" variant="outlined" 
                value={updatedTask}
                onChange={(e)=>setUpdatedTask(e.target.value)}
                multiline
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleUpdate} autoFocus>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}