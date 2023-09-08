import React from "react";
import { Box, useTheme } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";

const data = [
  {
    id: "japan",
    color: "hsl(349, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 228,
      },
      {
        x: "helicopter",
        y: 62,
      },
      {
        x: "boat",
        y: 273,
      },
      {
        x: "train",
        y: 104,
      },
      {
        x: "subway",
        y: 123,
      },
      {
        x: "bus",
        y: 58,
      },
      {
        x: "car",
        y: 241,
      },
      {
        x: "moto",
        y: 195,
      },
      {
        x: "bicycle",
        y: 19,
      },
      {
        x: "horse",
        y: 112,
      },
      {
        x: "skateboard",
        y: 262,
      },
      {
        x: "others",
        y: 235,
      },
    ],
  },
  {
    id: "france",
    color: "hsl(152, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 32,
      },
      {
        x: "helicopter",
        y: 117,
      },
      {
        x: "boat",
        y: 187,
      },
      {
        x: "train",
        y: 133,
      },
      {
        x: "subway",
        y: 79,
      },
      {
        x: "bus",
        y: 255,
      },
      {
        x: "car",
        y: 67,
      },
      {
        x: "moto",
        y: 239,
      },
      {
        x: "bicycle",
        y: 191,
      },
      {
        x: "horse",
        y: 130,
      },
      {
        x: "skateboard",
        y: 187,
      },
      {
        x: "others",
        y: 248,
      },
    ],
  },
  {
    id: "us",
    color: "hsl(312, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 152,
      },
      {
        x: "helicopter",
        y: 243,
      },
      {
        x: "boat",
        y: 247,
      },
      {
        x: "train",
        y: 259,
      },
      {
        x: "subway",
        y: 192,
      },
      {
        x: "bus",
        y: 294,
      },
      {
        x: "car",
        y: 160,
      },
      {
        x: "moto",
        y: 268,
      },
      {
        x: "bicycle",
        y: 48,
      },
      {
        x: "horse",
        y: 119,
      },
      {
        x: "skateboard",
        y: 40,
      },
      {
        x: "others",
        y: 23,
      },
    ],
  },
  {
    id: "germany",
    color: "hsl(221, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 233,
      },
      {
        x: "helicopter",
        y: 37,
      },
      {
        x: "boat",
        y: 16,
      },
      {
        x: "train",
        y: 139,
      },
      {
        x: "subway",
        y: 94,
      },
      {
        x: "bus",
        y: 56,
      },
      {
        x: "car",
        y: 260,
      },
      {
        x: "moto",
        y: 258,
      },
      {
        x: "bicycle",
        y: 44,
      },
      {
        x: "horse",
        y: 19,
      },
      {
        x: "skateboard",
        y: 136,
      },
      {
        x: "others",
        y: 175,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(197, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 276,
      },
      {
        x: "helicopter",
        y: 262,
      },
      {
        x: "boat",
        y: 194,
      },
      {
        x: "train",
        y: 195,
      },
      {
        x: "subway",
        y: 250,
      },
      {
        x: "bus",
        y: 54,
      },
      {
        x: "car",
        y: 24,
      },
      {
        x: "moto",
        y: 34,
      },
      {
        x: "bicycle",
        y: 156,
      },
      {
        x: "horse",
        y: 180,
      },
      {
        x: "skateboard",
        y: 36,
      },
      {
        x: "others",
        y: 94,
      },
    ],
  },
];
export default function Data({isDashboard = false}) {
  const theme = useTheme();
  return (
    <Box sx={{ height: isDashboard?"350px":"75vh" }}>
      <ResponsiveLine
        theme={{
          // @ts-ignore
          text: {
            fontSize: 11,
            fill: theme.palette.text.primary,
            outlineWidth: 0,
            outlineColor: "transparent",
          },
          axis: {
            domain: {
              line: {
                stroke: theme.palette.divider,

              },
            },
            legend: {
              text: {
                fontSize: 12,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
            ticks: {
              line: {
                stroke: theme.palette.text.primary,
                strokeWidth: 1,
              },
              text: {
                fontSize: 11,
                fill: theme.palette.text.secondary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
          },
          grid: {
            line: {
              stroke: theme.palette.divider,
              strokeWidth:0,
            },
          },
          legends: {
            title: {
              text: {
                fontSize: 11,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
            text: {
              fontSize: 11,
              fill: theme.palette.text.primary,
              outlineWidth: 0,
              outlineColor: "transparent",
            },
            ticks: {
              line: {},
              text: {
                fontSize: 10,
                fill: theme.palette.text.secondary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
          },
          annotations: {
            text: {
              fontSize: 13,
              fill: theme.palette.text.primary,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            link: {
              stroke: "#000000",
              strokeWidth: 1,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            outline: {
              stroke: "#000000",
              strokeWidth: 2,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            symbol: {
              fill: theme.palette.text.primary,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
          },
          tooltip: {
            container: {
              background: theme.palette.background.default,
              color: theme.palette.text.primary,
              fontSize: 12,
            },
            basic: {},
            chip: {},
            table: {},
            tableCell: {},
            tableCellValue: {},
          },
        }}
        data={data}
        curve="catmullRom"
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDashboard?null:"transportation",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend:  isDashboard?null:"Count",
          legendOffset: -45,
          legendPosition: "middle",
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </Box>
  );
}
