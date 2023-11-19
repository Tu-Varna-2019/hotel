import { ConsoleLogger } from "aws-amplify/utils";
import { post, generateClient } from "aws-amplify/api";
import { useNavigate } from "react-router-dom";

export function Utils() {
  const logger = new ConsoleLogger("Amplify_Log", "INFO");
  const client = generateClient();
  const navigate = useNavigate();
  // API calls
  const apiCreateHotel = async (event) => {
    try {
      const responseOperation = post({
        apiName: "apiHotelProd",
        path: "/create",
        options: {
          body: {
            message: event,
          },
        },
      });
      const response = await responseOperation.response;

      logger.info(response);
      return response;
    } catch (err) {
      logger.info(err);
    }
  };

  const apiUpdateHotel = async (event) => {
    try {
      const responseOperation = post({
        apiName: "apiHotelProd",
        path: "/update",
        options: {
          body: {
            message: event,
          },
        },
      });
      const response = await responseOperation.response;
      logger.info(response);
      return response;
    } catch (err) {
      logger.info(err);
    }
  };
  return { client, navigate, logger, apiCreateHotel, apiUpdateHotel };
}
