import * as React from "react";
import { UrlData } from "../interface/UrlData";
import { Link } from "react-router-dom";
import { serverUrl } from "../helpers/Constants";
import { Copy, Trash2 } from "lucide-react";
import axios from "axios";
import Button from "./Button";
import toast from 'react-hot-toast';

interface IDataTableProps {
  data: UrlData[];
  updateReloadState: () => void;
}

const DataTable: React.FunctionComponent<IDataTableProps> = (props) => {
  const { data, updateReloadState } = props;
  // console.log("data in data table is", data);

  const renderTableData = () => {
    return data.map((item) => {
      return (
        <tr
          key={item._id}
          className="transition-colors hover:bg-white/5 border-b border-slate-700 last:border-b-0"
        >
          <td className="text-slate-300 truncate overflow-hidden px-4 py-3">
            <Link
              to={item.fullUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-blue-400 block whitespace-nowrap"
              title={item.fullUrl}
            >
              {item.fullUrl}
            </Link>
          </td>
          <td className="text-blue-400 px-4 py-3 whitespace-nowrap">
            <Link
              to={`${serverUrl}/shortUrl/${item.shortUrl}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              {item.shortUrl}
            </Link>
          </td>
          <td className="text-slate-300 text-center px-4 py-3">
            {item.clicks}
          </td>
          <td className="text-right px-4 py-3 whitespace-nowrap">
            <div className="flex justify-end items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => copyToClipboard(item.shortUrl)}
                className="text-slate-300 hover:text-white hover:bg-white/10 p-1.5 rounded"
              >
                <Copy className="h-4 w-4" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => deleteUrl(item._id)}
                className="text-slate-300 hover:text-red-400 hover:bg-white/10 p-1.5 rounded"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </td>
        </tr>
      );
    });
  };

  const copyToClipboard = async (urlToCopy: string) => {
    try {
      await navigator.clipboard.writeText(`${serverUrl}/shortUrl/${urlToCopy}`);
      toast.success("URL Copied Successfully")
    } catch (error) {
      toast.error("Something went wrong")
      console.error("Error copying to clipboard:", error);
      
    }
  };

  const deleteUrl = async (id: string) => {
    const response = await axios.delete(`${serverUrl}/shortUrl/${id}`);
    toast.success("URL Deleted Successfully")
    console.log(response);
    updateReloadState();
  };
  //table - rounded-lg border border-slate-700 overflow-hidden bg-white/5
  //table head - className="text-md uppercase text-gray-50 bg-gray-700"
  return (
    <div className="container mx-auto px-4 pb-10">
      <div className="rounded-lg border border-slate-700 bg-slate-800/30 overflow-hidden overflow-x-auto">
        <table className="min-w-full w-full table-fixed border-collapse">
          <thead className="bg-slate-700/50">
            <tr>
              <th
                scope="col"
                className="w-5/12 px-4 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider"
              >
                Full Url
              </th>
              <th
                scope="col"
                className="w-3/12 px-4 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider"
              >
                Short Url
              </th>
              <th
                scope="col"
                className="w-1/12 px-4 py-3 text-center text-xs font-medium text-slate-300 uppercase tracking-wider"
              >
                Clicks
              </th>
              <th
                scope="col"
                className="w-3/12 px-4 py-3 text-right text-xs font-medium text-slate-300 uppercase tracking-wider"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-700">{renderTableData()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
