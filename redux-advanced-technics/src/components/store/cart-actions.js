import { uiActions } from "./ui-slice";
import { cartAction } from "./cart-slice";

let baseUrl =
  "https://react-http-b8057-default-rtdb.europe-west1.firebasedatabase.app/cart.json";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      let response = await fetch(baseUrl);

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }

      let data = await response.json();

      console.log(data);

      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        cartAction.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data feiled!",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );

    const sendRequest = async () => {
      let response = await fetch(baseUrl, {
        method: "PUT",
        body: JSON.stringify({
          items: cart.items,
          totalQuantity: cart.totalQuantity,
        }),
      });

      if (!response.ok) {
        throw new Error("Sending cat data failed.");
      }
    };

    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!...",
          message: "Send cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data feiled!",
        })
      );
    }
  };
};
