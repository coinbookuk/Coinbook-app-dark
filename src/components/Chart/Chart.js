import React, { useState, useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";
import axios from "axios";
import moment from "moment";
import "./Chart.css";
import MoonPayPopup from "../MoonPayPopup.js";
import { withTheme } from "@material-ui/core";

const Chart = (props) => {
  const [chartData, setChartData] = useState({});
  const [chartVol, setChartVol] = useState({});
  const [id] = useState(props.id);
  const [coinsOnMoonPay] = useState(props.coinsOnMoonPay);
  const [currency] = useState(props.currency);
  const [symbol] = useState(props.currencysymbols);
  const [days] = useState(props.days);
  const [redraw, setRedraw] = useState({});
  const convertToBillions = (number) => {
    if (number > 1000000) {
      return (
        (number / 1000000000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
        "B"
      );
    } else {
      return number;
    }
  };
  const mobileOrNot = () => {
    let width = window.innerWidth;
    if (width > 768) {
      return <></>;
    } else {
      return <br />;
    }
  };
  const chart = (props) => {
    let daysChart = props.days;
    let currency = props.currency;
    let symbol = props.currencysymbols;
    let time = [];
    let price = [];
    let priceSmaller = [];
    let volume = [];
    let volumeSmaller = [];
    let timeSmaller = [];
    let timeSmallerAndConvertedForVolume = [];

    let timeSmallerAndConverted = [];
    let whichCoin = id;
    function roundDownPrice(number) {
      if (number >= 1) {
        const decimals = 2;
        const amount =
          Math.floor(number * Math.pow(10, decimals)) / Math.pow(10, decimals);
        return amount.toFixed(2);
      } else if (number >= 0.001) {
        const decimals = 6;
        return (
          Math.floor(number * Math.pow(10, decimals)) /
          Math.pow(10, decimals).toFixed(4)
        );
      } else {
        const decimals = 9;
        return (
          Math.floor(number * Math.pow(10, decimals)) / Math.pow(10, decimals)
        );
      }
    }
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${whichCoin}/market_chart?vs_currency=${currency}&days=${daysChart}`
      )
      .then((res) => {
        console.log(res);
        for (const dataObj of res.data.prices) {
          time.push(dataObj[0]);
          price.push(dataObj[1]);
        }
        console.log(price);

        for (var i = 0; i < price.length; i = i + 1) {
          priceSmaller.push(roundDownPrice(price[i]));
        }
        for (var i = 0; i < time.length; i++) {
          timeSmaller.push(time[i]);
        }
        for (var i = 0; i < timeSmaller.length; i++) {
          timeSmallerAndConverted.push(moment(timeSmaller[i]).format("lll"));
        }
        for (const dataObj of res.data.total_volumes) {
          time.push(dataObj[0]);
          volume.push(dataObj[1]);
        }
        console.log(volume);

        for (var i = 0; i < volume.length; i = i + 4) {
          volumeSmaller.push(volume[i]);
        }
        for (var i = 0; i < timeSmallerAndConverted.length; i = i + 4) {
          timeSmallerAndConvertedForVolume.push(timeSmallerAndConverted[i]);
        }
        setChartData({
          labels: timeSmallerAndConverted,
          datasets: [
            {
              label: "Price",
              backgroundColor: "rgba(63, 43, 175, 0.8)",
  background: `
    linear-gradient(180deg, rgba(74, 61, 140, 1), rgba(18, 9, 17, 1)),
    linear-gradient(333deg, rgba(153, 207, 255, 0.2), rgba(180, 255, 217, 0.08)),
    radial-gradient(circle at 77% 89%, rgba(125, 163, 169, 0.8), rgba(125, 163, 169, 0) 50%),
    radial-gradient(circle at 15% 95%, rgba(125, 163, 169, 0.8), rgba(125, 163, 169, 0) 43%),
    radial-gradient(circle at 65% 23%, rgba(137, 151, 119, 0.4), rgba(137, 151, 119, 0) 70%),
    radial-gradient(circle at 10% 0%, rgba(187, 211, 204, 0.33), rgba(187,211,204,0) 35%),
    radial-gradient(circle at 11% 100%, rgba(131, 165, 203, 0.3), rgba(131, 165, 203, 0) 30%)
    `,

              borderWidth: "0px",
              data: priceSmaller,
            },
          ],
        });
        setChartVol({
          labels: timeSmallerAndConvertedForVolume,
          datasets: [
            {
              label: "Volume",
              backgroundColor: "rgba(63, 43, 175, 0.8)",
  background: `
    linear-gradient(180deg, rgba(74, 61, 140, 1), rgba(18, 9, 17, 1)),
    linear-gradient(333deg, rgba(153, 207, 255, 0.2), rgba(180, 255, 217, 0.08)),
    radial-gradient(circle at 77% 89%, rgba(125, 163, 169, 0.8), rgba(125, 163, 169, 0) 50%),
    radial-gradient(circle at 15% 95%, rgba(125, 163, 169, 0.8), rgba(125, 163, 169, 0) 43%),
    radial-gradient(circle at 65% 23%, rgba(137, 151, 119, 0.4), rgba(137, 151, 119, 0) 70%),
    radial-gradient(circle at 10% 0%, rgba(187, 211, 204, 0.33), rgba(187,211,204,0) 35%),
    radial-gradient(circle at 11% 100%, rgba(131, 165, 203, 0.3), rgba(131, 165, 203, 0) 30%)
    `,
              borderColor: "rgba(135, 99, 225, 1)",
              data: volumeSmaller,
            },
          ],
        });

        setRedraw(true);
        setRedraw(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    chart(props);
  }, [props]);
  return (
    <div className="charts-div">
      <td className="charts">
        <p className="chart-name">Price</p>
        <Line
          redraw={redraw}
          data={chartData}
          options={{
            legend: {
              display: false,
            },
            tooltips: {
              displayColors: false,
              mode: "x-axis",

              backgroundColor: "#111111",
              bodyFontColor: "#F5F5F5",
              titleFontColor: "#F5F5F5",
              borderWidth: 1,
              borderColor: "#111111",
              callbacks: {
                label: function (tooltipItems) {
                  if (tooltipItems.yLabel > 1) {
                    return (
                      symbol +
                      tooltipItems.yLabel
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    );
                  } else {
                    return symbol + tooltipItems.yLabel.toString();
                  }
                },
              },
            },
            responsive: true,
            title: { text: "SCALE", display: false },
            elements: {
              point: {
                radius: 0,
              },
              line: {
                tension: 0.05,
              },
            },
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: false,
                    maxTicksLimit: 10,
                    beginAtZero: true,
                    fontColor: "#F5F5F5",
                    callback: function (value) {
                      if (value > 1) {
                        return (
                          props.currencysymbols +
                          value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                        );
                      } else {
                        return props.currencysymbols + value.toString();
                      }
                    },
                  },
                  gridLines: {
                    display: false,
                  },
                },
              ],
              xAxes: [
                {
                  ticks: {
                    maxTicksLimit: 4,
                    maxRotation: 0,
                    minRotation: 0,
                    fontColor: "#F5F5F5",
                    callback: function (value) {
                      return value.split(",")[0];
                    },
                  },
                  gridLines: {
                    display: false,
                  },
                },
              ],
            },
          }}
        />
      </td>
      {mobileOrNot()}
      <td className="charts-vol">
        <p className="chart-name">Volume</p>
        <Bar
          redraw={redraw}
          data={chartVol}
          options={{
            legend: {
              display: false,
            },
            tooltips: {
              displayColors: false,
              mode: "x-axis",
              backgroundColor: "#111111",
              bodyFontColor: "#F5F5F5",
              titleFontColor: "#F5F5F5",
              borderWidth: 1,
              borderColor: "#111111",
              callbacks: {
                label: function (tooltipItems) {
                  return (
                    symbol +
                    tooltipItems.yLabel
                      .toFixed(0)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  );
                },
              },
            },
            responsive: true,
            title: { text: "SCALE", display: false },
            elements: {
              point: {
                radius: 0,
              },
              line: {
                tension: 0.05,
              },
            },
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true,
                    fontColor: "#F5F5F5",
                    callback: function (value) {
                      return props.currencysymbols + convertToBillions(value);
                    },
                  },
                  gridLines: {
                    display: false,
                  },
                },
              ],
              xAxes: [
                {
                  ticks: {
                    maxTicksLimit: 4,
                    maxRotation: 0,
                    minRotation: 0,
                    fontColor: "#F5F5F5",
                    callback: function (value) {
                      return value.split(",")[0];
                    },
                  },
                  gridLines: {
                    display: false,
                  },
                },
              ],
            },
          }}
        />
      </td>
    </div>
  );
};

export default Chart;
