import React from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { colors } from "../../public/colors";
import CloseIcon from '@mui/icons-material/Close'
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Modal from "@mui/material/Modal";
import SideBar from "./layout/SideBar";
const style = {
  position: 'absolute' ,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
};
const Index = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <div className="flex items-start overflow-auto ">
        <div
          className="p-4 w-9/12 grid grid-cols-3 gap-5  mt-10"
          style={{ height: "100vh" }}
        >
          {colors.map((colors, index) => {
            return (
              <div
                className="max-w-sm border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                style={{ backgroundColor: colors.hex }}
              >
                <a href="#">
                  <img
                    className=" w-full cover"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwE4N1bx6FwiuVEu4slaTAbEns42WRVz351DnixnoE4A&s"
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Table -{index + 1}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                  <button
                    onClick={() => setOpen(true)}
                    data-modal-target="staticModal"
                    data-modal-toggle="staticModal"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    book now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <SideBar/>
    
      <Modal  onClose={() => setOpen(false)} open={open}>
      <Box sx={style} className="bg-white">
      <Stack direction="row" alignItems='center'  justifyContent="space-between"  spacing={1} className="px-4">
        <Typography id="modal-modal-title"  className="p-4" variant="h6" component="h2">
            add new customer
        </Typography>
        
      <IconButton sx={{borderRadius:'25px', padding:'10px' ,background:"grayscale" , }} onClick={()=>setOpen(false)} aria-label="delete">
        <CloseIcon />
      </IconButton>
        
        </Stack>
        <form className="border-t-2 border-slate-600 p-5">
        <div className="mb-6">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              customer name 
            </label>
            <input
              type="text"
              id="name"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              customer email 
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              customer address
            </label>
            <input
              type="text"
              id="text"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="repeat-password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              customer phone no 
            </label>
            <input
              type="number"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>
        
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Register new account
          </button>
        </form>
      </Box>
      </Modal>
    </>
  );
};

export default Index;
