import React from "react";
import { Table } from "react-bootstrap";

const PlayerStatTable = ({ stat }) => {
  // the nested object.keys ensures that if the player does not have
  // a test or an odi record it can still fallback to the given key not the hard coded one
  const headings = stat ? Object.keys(stat[Object.keys(stat)[0]]) : [];
  const formats = stat ? Object.keys(stat) : [];
  const renderHeadings = () => headings.map((heading,index) => <th key={index}>{heading}</th>);
  return (
    <div>
      <Table responsive striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Format</th>

            {renderHeadings()}
          </tr>
        </thead>
        <tbody>
          {formats.map((format, index) => {
            return (
              <tr key={index}>
                <td>{format}</td>
                {Object.values(stat[format]).map((avg, index) => (
                  <td key={index}>{avg !== "" ? avg : "-"}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};
export default PlayerStatTable;
