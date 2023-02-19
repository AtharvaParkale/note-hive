import { noteActions } from "./note-slice";

export const fetchData = async () => {
  return async (dispatch) => {
    const fetchHandler = async () => {
      const res = await fetch(
        "http://localhost:3001/notes/"
      );

      const data = await res.json();

      return data;
    };

    try {
      const cartData = await fetchHandler();
      console.log(cartData);

      dispatch(noteActions.replaceData(cartData));
    } catch (err) {
      console.log("Error while fetching teh data !");
    }
  };
};
