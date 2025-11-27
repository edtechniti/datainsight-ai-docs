# Getting Started

Welcome to DataInsight AI! This guide will help you get up and running in minutes.

## Prerequisites

To use DataInsight AI, you'll need:

1. **A modern web browser** (Chrome, Firefox, Safari, or Edge)
2. **A Claude API key** from Anthropic (for AI-powered features)
3. **A CSV file** with your data

## Step 1: Get Your Claude API Key

DataInsight AI uses Claude AI to analyze your data and provide insights. To get your API key:

1. Visit [Anthropic Console](https://console.anthropic.com/)
2. Sign up or log in to your account
3. Navigate to **API Keys** section
4. Click **Create Key**
5. Copy your API key (it starts with `sk-ant-v1-`)

::: tip
Keep your API key secure! Never share it publicly or commit it to version control.
:::

## Step 2: Configure Your API Key

When you first open DataInsight AI:

1. Click the **Settings** icon in the top navigation
2. Paste your Claude API key in the input field
3. Click **Save** or press Enter
4. The key is stored securely in your browser's local storage

::: info
Your API key never leaves your browser. All Claude API calls are made directly from your browser to Anthropic's servers.
:::

## Step 3: Upload Your CSV File

1. Click the **Upload CSV** button or drag and drop a CSV file onto the page
2. The file is parsed instantly in your browser
3. You'll see a preview of your data

::: warning File Requirements
- File must be in CSV format (.csv)
- Maximum file size: 10MB recommended
- First row should contain column headers
- Data should be properly formatted (no merged cells, etc.)
:::

## Step 4: Explore AI Insights

Once your file is uploaded, Claude AI automatically:

1. **Analyzes your data** - identifies patterns, trends, and anomalies
2. **Generates insights** - provides key observations about your dataset
3. **Recommends charts** - suggests the best visualization types
4. **Assesses quality** - flags any data quality issues

You'll see these insights in the **Insights Panel** on the left side.

## Step 5: Create Visualizations

To create a chart:

1. Review the **Chart Recommendations** in the control panel
2. Click on a recommended chart type, or
3. Select a chart type manually from the dropdown
4. Configure the chart:
   - Choose X-axis field
   - Choose Y-axis field (if applicable)
   - Add grouping (optional)
5. Click **Generate Chart**

Your interactive chart appears instantly!

## Step 6: Ask Questions

Use the **Natural Language Query** feature to ask questions:

1. Type your question in the query input
2. Examples:
   - "What's the trend over time?"
   - "Which category has the highest sales?"
   - "Show me the distribution by region"
3. Press Enter or click **Ask**
4. Receive an AI-generated answer with supporting visualizations

## Step 7: Export Your Work

Share your insights:

1. **Export as Image**:
   - Click the camera icon on any chart
   - PNG image downloads automatically

2. **Export as PDF**:
   - Click **Export PDF** button
   - All visible charts included in PDF

3. **Share Link** (coming soon):
   - Click **Share** button
   - Generate a unique shareable link

## Next Steps

Now that you're set up, explore these features:

- [AI-Powered Analysis](/features/ai-analysis) - Learn how Claude analyzes your data
- [Chart Types](/features/chart-types) - Discover all available visualizations
- [Best Practices](/advanced/best-practices) - Tips for better visualizations

## Troubleshooting

Having issues? Check out our [Troubleshooting Guide](/advanced/troubleshooting) or [FAQ](/advanced/faq).

## Need Help?

If you encounter any problems:

1. Check the browser console for errors
2. Verify your API key is valid
3. Ensure your CSV file is properly formatted
4. Review the [Data Requirements](/advanced/data-requirements) guide

Happy visualizing! 🚀
