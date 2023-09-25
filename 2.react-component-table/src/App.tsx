import React, { useState, useEffect } from "react";
import "./App.css";

/**
 * 实现一个 Table 组件满足以下功能，如图 table.jpeg 所示
 * - 把数据渲染成表格
 * - 支持列排序
 * - 支持多列排序
 */

/**
 * 使用如下数据进行测试
 */
const testData: {
  name: string;
  chinese: number;
  math: number;
  english: number;
}[] = [
  {
    name: "Jim",
    chinese: 98,
    math: 60,
    english: 70,
  },
  {
    name: "Tom",
    chinese: 98,
    math: 66,
    english: 89,
  },
  {
    name: "Han",
    chinese: 98,
    math: 90,
    english: 70,
  },
  {
    name: "Lilei",
    chinese: 88,
    math: 99,
    english: 89,
  },
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Chinese",
    dataIndex: "chinese",
    key: "chinese",
    sort: true,
  },
  {
    title: "Math",
    dataIndex: "math",
    key: "math",
    sort: true,
  },
  {
    title: "English",
    dataIndex: "english",
    key: "english",
    sort: true,
  },
];

function Table({ data }: { data: any[]; columns: any[] }) {
  // // 处理列排序的函数
  const handleSort = (type: any) => {
    console.log(type);
  };

  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          {columns.map((column, index) => (
            <th key={column["key"]}>
              {column["title"]}
              {column["sort"] ? (
                <i
                  className="sortIcon"
                  onClick={() => handleSort(column["key"])}
                />
              ) : (
                ""
              )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.name}>
            {columns.map((column) => (
              <td key={column["key"]}>{item[column["key"]]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
function App() {
  return (
    <div className="App">
      <h1>Table 组件</h1>
      <Table data={testData} columns={columns} />
    </div>
  );
}

export default App;
