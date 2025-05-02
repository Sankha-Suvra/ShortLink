import * as React from "react";
import FormContainer from "./FormContainer";
import { UrlData } from "../interface/UrlData";
import axios from "axios";
import DataTable from "./DataTable";
import { Toaster } from "react-hot-toast";
interface IContainerProps {}

const Container: React.FunctionComponent<IContainerProps> = () => {
  const [data, setData] = React.useState<UrlData[]>([]);
  const [reload, setReload] = React.useState<boolean>(false);

  const updateReloadState = (): void => {
    setReload(true);
  };
  const fetchTableData = async () => {
    //http://localhost:5001/api/shortUrl
    //https://url-shortener-76fl.onrender.com/api/shortUrl
    const response = await axios.get(`https://url-shortener-76fl.onrender.com/api/shortUrl`);
    console.log("the response from server is", response);
    setData(response.data);
    setReload(false);
  };
  React.useEffect(() => {
    fetchTableData();
  }, [reload]);
  return (
    <main className="min-h-[calc(100vh-136px)] bg-gradient-to-b from-blue-950 to-slate-900">
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: {
            background: "#334155", // bg-slate-700
            color: "#e2e8f0", // text-slate-200
          },
          success: {
            duration: 2000,
          },
          error: {
            duration: 4000,
          }
        }}
      />
        <FormContainer updateReloadState={updateReloadState} />
        <DataTable updateReloadState={updateReloadState} data={data} />
      
    </main>
  );
};

export default Container;
