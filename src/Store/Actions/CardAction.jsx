import { setcard } from "../Reducers/CardSlice";
import axios from "axios";
export const GetCard = () => async (dispatch) => {
  try {
    const body = JSON.stringify({
      limit: 10,
      offset: 0,
    });
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
    };
    const { data } = await axios.post(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      requestOptions
    );

    //  console.log(data.jdList)
    dispatch(setcard(data.jdList));
  } catch (error) {
    console.log(error);
  }
};
