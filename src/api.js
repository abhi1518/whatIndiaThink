// api.js
import axios from 'axios';

const API_BASE_URL = 'https://api.whatindiathinks.com/public/api';

const handleResponse = (response) => {
  if (response.status !== 200) {
    throw new Error('Network response was not ok.');
  }
  return response.data;
};

export const registerUser = async (formData) => {
  try {
    const requestOptions = {
      method: 'post',
      url: `${API_BASE_URL}/newregister/register`,
      data: formData,
    };

    const response = await axios(requestOptions);
    return handleResponse(response);
  } catch (error) {
    throw new Error('Error registering user.');
  }
};

export const registerOtp = async (formData) => {
    try {
      const requestOptions = {
        method: 'post',
        url: `${API_BASE_URL}/newregister/otp`,
        data: formData,
      };
  
      const response = await axios(requestOptions);
      return handleResponse(response);
    } catch (error) {
      throw new Error('Error registering user.');
    }
  };

  export const registerPassword = async (formData) => {
    try {
      const requestOptions = {
        method: 'post',
        url: `${API_BASE_URL}/newregister/password`,
        data: formData,
      };
  
      const response = await axios(requestOptions);
      return handleResponse(response);
    } catch (error) {
      throw new Error('Error registering user.');
    }
  };

  export const registerLogin = async (formData) => {
    try {
      const requestOptions = {
        method: 'post',
        url: `${API_BASE_URL}/userlogin/login`,
        data: formData,
      };
  
      const response = await axios(requestOptions);
      return handleResponse(response);
    } catch (error) {
      throw new Error('Error registering user.');
    }
  };

  export const contactUs = async (formData) => {
    try {
      const requestOptions = {
        method: 'post',
        url: `${API_BASE_URL}/contactform/contactdetails`,
        data: formData,
      };
  
      const response = await axios(requestOptions);
      return handleResponse(response);
    } catch (error) {
      throw new Error('Error registering user.');
    }
  };

  export const blogGet = async () => {
    try {
      const requestOptions = {
        method: 'get',
        url: `${API_BASE_URL}/blog/blogget`,
        // data: formData,
      };
  
      const response = await axios(requestOptions);
      return handleResponse(response);
    } catch (error) {
      throw new Error('Error registering user.');
    }
  };

  export const optionGet = async (dynamicParam) => {
    try {
      const requestOptions = {
        method: 'get',
        url: `${API_BASE_URL}/blog/blogoption/${dynamicParam}`,
        // data: formData,
      };
  
      const response = await axios(requestOptions);
      return handleResponse(response);
    } catch (error) {
      throw new Error('Error registering user.');
    }
  };

  export const readMore = async (dynamicParam) => {
    try {
      const requestOptions = {
        method: 'get',
        url: `${API_BASE_URL}/blog/bloggetbyid/${dynamicParam}`,
        // data: formData,
      };
  
      const response = await axios(requestOptions);
      return handleResponse(response);
    } catch (error) {
      throw new Error('Error registering user.');
    }
  };
    