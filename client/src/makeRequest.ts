import axios from "axios";

export const makeRequest = axios.create({
  baseURL: 'http://localhost:1337/api',
  headers: {
    Authorization: 'bearer 13062ea5fa819cf718396b763baedd4f9419ef7e2c9d054317e83fcd297d6335e6b8dd9fbd873b7c1cfb611c415232b07521a8476d341cf2814ce2620c5cb51a0d7df161b86bcdc76ed6e2e144d3038da2529b2d245f6fd62cd1aab9a7932317e0771c55af768957bca23fed6de700266619c7e9b6260e3891801dd72475fa66',
  },
});