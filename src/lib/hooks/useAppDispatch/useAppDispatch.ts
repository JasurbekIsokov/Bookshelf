import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../provider/StoreProvider";

export const useAppDispatch = () => useDispatch<AppDispatch>();
