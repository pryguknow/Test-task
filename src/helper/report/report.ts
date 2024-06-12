const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "test-report",
  reportPath: "./",
  metadata: {
    browser: {
      name: "chrome",
      version: "60",
    },
    device: "Local test machine",
    platform: {
      name: "macOS Ventura",
      version: "13.2.1",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "Registration Form" },
      { label: "Release", value: "1.0.0" },
      { label: "Cycle", value: "B11221.34321" },
      { label: "Execution Start Time", value: "Jun 12th 2024, 02:31 PM EST" },
      { label: "Execution End Time", value: "Jun 12th 2024, 02:32 PM EST" },
    ],
  },
});