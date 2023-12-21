import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Typography,
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  MenuItem,
  DialogActions,
  Slide,
  Button,
  TextField
} from "@mui/material";
import { toast } from "react-toastify";
import axios from "axios";

//  local imports
// import { addUserApi, deleteUserApi, editUserApi } from "../../api/user/userApi";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const AddEditUser = ({ addPopup, setAddPopup, callFunc }) => {
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      // name: "",
      email: "",
      password: "",
      // roleId: "",
    },
  });


  const addUser = async (data)=>{
    console.log(data, 'form data');
    try {
   
      } catch (error) {
        toast.error('An error occurred during login')
        console.log("An error occurred during login:", error.message);
      }
  }

  const userData = addPopup.user;

  useEffect(() => {
    if (addPopup.user) {
      reset({
        // name: userData?.name,
        email: userData?.email,
        password: userData?.password,
        // roleId: userData?.roleId,
      });
    }
  }, [addPopup.isOpen]);

  const onSubmit = async (data) => {
    if (!addPopup.isDelete && addPopup.id) {
      const res = await axios.put(
        `/update-user/${addPopup.id}`,
        data
        );
 
      if (res.status == 200) {
        toast.success("User Credientials Updated Successfully!");
        handleClose();
        callFunc();
      } else {
        toast.error(
          res?.response?.data?.message || "Some Unexpected Error Occured"
        );
      }
    } else if (addPopup.isDelete && addPopup.id) {
    } else if (!addPopup.isDelete && !addPopup.id) {
      const res = await axios.post(
        '/create-user',
        data
        );
      if (res?.status == 200) {
        toast.success("User created Successfully!");
        handleClose();
        callFunc();
      } else {
        toast.error(
          res?.response?.data?.message || "Some Unexpected Error Occured"
        );
      }
    }
  };

  const handleClose = () => {
    setAddPopup({ isOpen: false });
    reset({
      // name: "",
      password: "",
      email: "",
      // roleId: "",
    });
  };

  return (
    <Dialog
      open={addPopup.isOpen}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <Box
        sx={{
          background: "var(--color-bg-primary)",
          color: "var(--color-text-primary)",
        }}
      >
        <DialogTitle id="alert-dialog-title">
          {!addPopup.isDelete ? (
            !addPopup.id ? (
              <Typography color="var(--color-text-primary)" fontWeight="700">
                Create User
              </Typography>
            ) : (
              <Typography color="var(--color-text-primary)" fontWeight="700">
                Edit User
              </Typography>
            )
          ) : (
            <Typography color="var(--color-text-primary)" fontWeight="700">
              Delete User
            </Typography>
          )}
        </DialogTitle>

        {!addPopup.isDelete ? (
          <DialogContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* <TextField
                {...register("name", { required: true })}
                margin="normal"
                label="Name"
                fullWidth
                error={Boolean(errors.name)}
                helperText={errors.name ? "Name is required" : ""}
                InputLabelProps={{ shrink: true }}
              /> */}

              <TextField
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Invalid email address, must include @ ",
                  },
                })}
                margin="normal"
                label="Email"
                error={Boolean(errors.email)}
                helperText={errors.email ? errors.email.message : ""}
                fullWidth
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                {...register("password")}
                margin="normal"
                // type="password"
                label="Password"
                fullWidth
                InputLabelProps={{ shrink: true }}
              />

              {/* <Controller
                control={control}
                name="roleId"
                defaultValue=""
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField
                    InputLabelProps={{ shrink: true }}
                    {...field}
                    label="Select Role"
                    fullWidth
                    margin="normal"
                    select
                    error={Boolean(errors.role)}
                    helperText={errors.role ? "Role is required" : ""}
                  >
                    <MenuItem value=""></MenuItem>
                    {roles?.map((role) => (
                      <MenuItem key={role.id} value={role.id}>
                        {role.name}
                      </MenuItem>
                    ))}
                  </TextField>
                )}
              /> */}

              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
              >
                <Button variant="contained"
                  onClick={() => {}}
                  type="submit"
                >{!addPopup.id ? "Submit" : "Update"}</Button>

                <Button variant="contained"
                  onClick={() => {
                    handleClose();
                  }}
                >Close</Button>
              </Box>
            </form>
          </DialogContent>
        ) : (
          <>
            <DialogContent>Are you sure to delete this user?</DialogContent>
            <DialogActions>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Box display="flex" gap="10px">
                  <Button variant="outlined"
                    onClick={handleClose}
                    autoFocus
                  >cancel</Button>
                  <Button variant="outlined"
                    onClick={async () => {
                     
                    const res = await   axios.delete(`/delete-user/${addPopup.id}` );
                      if (res.status == 200) {
                        toast.success("User Deleted!");

                        handleClose();
                        callFunc();
                      } else {
                        toast.error(
                          res?.response?.data?.message ||
                            "Some Unexpected Error Occured"
                        );
                      }
                    }}
                  >Delete</Button>
                </Box>
              </form>
            </DialogActions>
          </>
        )}
      </Box>
    </Dialog>
  );
};

export default AddEditUser;