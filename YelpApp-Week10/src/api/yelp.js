import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer gDi0M6omcRwSlGQqCgP977t4oAXxC-3J_0b1Knfl7wFs-bC2Y9YIhBuzY9ORSRQ3f6buSB4cfXAU6rfpzblElaTw_OA5t7U2N17TETNKYBBgVkhuLNmKZf6YcSQ0Z3Yx",
  },
});
