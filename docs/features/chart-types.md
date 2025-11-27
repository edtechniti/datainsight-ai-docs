# Chart Types

DataInsight AI supports multiple chart types to help you visualize your data effectively.

## Available Chart Types

### 📊 Bar Chart

**Best for**: Comparing values across categories

**Use cases**:
- Sales by product category
- Regional performance comparison
- Survey responses
- Ranked lists

**Configuration**:
- **X-axis**: Category (text/date)
- **Y-axis**: Numeric value
- **Group by**: Optional secondary category

**Example**:
```
Product | Sales
--------|-------
Widget A| 1500
Widget B| 2300
Widget C| 1800
```
→ Bar chart comparing sales across products

### 📈 Line Chart

**Best for**: Showing trends over time

**Use cases**:
- Revenue over months
- User growth trends
- Stock prices
- Temperature changes

**Configuration**:
- **X-axis**: Time/date or sequential values
- **Y-axis**: Numeric value
- **Multiple lines**: Optional grouping

**Example**:
```
Month    | Revenue
---------|--------
Jan 2024 | 45000
Feb 2024 | 52000
Mar 2024 | 48000
```
→ Line chart showing revenue trend

### 🥧 Pie Chart

**Best for**: Showing part-to-whole relationships

**Use cases**:
- Market share distribution
- Budget allocation
- Category composition
- Percentage breakdowns

**Configuration**:
- **Labels**: Category names
- **Values**: Numeric values (converted to percentages)

**Example**:
```
Region | Sales
-------|------
North  | 3500
South  | 2800
East   | 4200
West   | 2500
```
→ Pie chart showing regional sales distribution

::: warning
Pie charts work best with 5-7 categories or fewer. More categories become hard to read.
:::

### 🔵 Scatter Plot

**Best for**: Showing relationships between two numeric variables

**Use cases**:
- Price vs. sales correlation
- Age vs. income relationship
- Performance metrics
- Outlier detection

**Configuration**:
- **X-axis**: Numeric value
- **Y-axis**: Numeric value
- **Color by**: Optional category grouping

**Example**:
```
Price | Sales
------|------
10.99 | 450
15.99 | 320
12.99 | 390
```
→ Scatter plot showing price-sales relationship

### 🏔️ Area Chart

**Best for**: Showing cumulative values or filled trends over time

**Use cases**:
- Cumulative sales
- Stacked categories over time
- Filled trend visualization
- Volume over time

**Configuration**:
- **X-axis**: Time/date or sequential values
- **Y-axis**: Numeric value
- **Stacked**: Optional for multiple series

**Example**:
```
Month | Total Users
------|------------
Jan   | 1000
Feb   | 1450
Mar   | 2100
```
→ Area chart showing user growth

## Choosing the Right Chart

### Decision Tree

```
Does your data have a time component?
├─ Yes → Line Chart or Area Chart
└─ No
   ├─ Comparing categories? → Bar Chart
   ├─ Showing composition? → Pie Chart
   └─ Showing correlation? → Scatter Plot
```

### Data Type Guide

| Data Types | Recommended Chart |
|------------|-------------------|
| Category + Number | Bar Chart |
| Time + Number | Line Chart, Area Chart |
| Category percentages | Pie Chart |
| Number + Number | Scatter Plot |
| Category + Number + Time | Grouped Bar Chart, Multi-line Chart |

## Chart Features

### Interactive Features

All charts support:

**Tooltips**:
- Hover over data points for details
- Shows exact values
- Multi-series information

**Legend**:
- Click to show/hide series
- Hover for series highlighting
- Color-coded categories

**Responsive**:
- Adapts to screen size
- Touch-friendly on mobile
- Maintains aspect ratio

### Customization Options

**Colors**:
- Automatic color assignment
- Consistent color schemes
- Dark mode support

**Axes**:
- Auto-scaled ranges
- Smart label formatting
- Grid lines for readability

**Labels**:
- Clear axis titles
- Data point labels (optional)
- Legend positioning

## Chart Best Practices

### Design Principles

✅ **Do**:
- Choose the chart type that best represents your data
- Use consistent colors across related charts
- Include clear axis labels
- Keep it simple - avoid chart junk
- Consider your audience

❌ **Don't**:
- Use 3D effects (they distort perception)
- Overload with too many data series
- Use pie charts for many categories
- Truncate Y-axis to exaggerate differences
- Mix incompatible data types

### Accessibility

Make your charts accessible:

- **Color blindness**: Don't rely solely on color
- **Text size**: Ensure labels are readable
- **Contrast**: Use high contrast in dark mode
- **Alternative text**: Provide data tables for screen readers

## Working with Charts

### Creating a Chart

1. Select chart type from recommendations or dropdown
2. Configure axes and grouping
3. Click "Generate Chart"
4. Chart appears instantly

### Modifying a Chart

1. Adjust configuration in the control panel
2. Chart updates in real-time
3. Experiment with different settings
4. Export when satisfied

### Multiple Charts

- Create multiple charts for different perspectives
- View them side-by-side
- Export all charts together in PDF
- Each chart is independent

## Chart Limitations

### Data Size Limits

**Recommended maximums**:
- **Bar Chart**: 50 bars
- **Line Chart**: 1000 points per line
- **Pie Chart**: 10 slices
- **Scatter Plot**: 5000 points
- **Area Chart**: 1000 points per series

::: tip
For larger datasets, consider aggregating or filtering data before visualization.
:::

### Performance Considerations

Large charts may:
- Take longer to render
- Be less responsive to interactions
- Require more browser memory

**Solutions**:
- Aggregate data (show monthly instead of daily)
- Filter to relevant subset
- Limit number of series
- Use sampling for scatter plots

## Advanced Chart Features

### Coming Soon

Future enhancements:
- **Heatmaps** - For correlation matrices
- **Box plots** - For distribution analysis
- **Treemaps** - For hierarchical data
- **Sankey diagrams** - For flow visualization
- **Candlestick charts** - For financial data

### Customization Options

Planned features:
- Custom color palettes
- Chart templates
- Annotation tools
- Trend lines
- Reference lines

## Examples by Industry

### Sales & Marketing
- **Bar Chart**: Product category performance
- **Line Chart**: Monthly revenue trends
- **Pie Chart**: Lead source distribution
- **Scatter Plot**: Marketing spend vs. conversions

### Finance
- **Line Chart**: Stock price over time
- **Area Chart**: Portfolio value growth
- **Bar Chart**: Quarterly earnings comparison
- **Scatter Plot**: Risk vs. return analysis

### Operations
- **Line Chart**: Production volume trends
- **Bar Chart**: Department performance
- **Scatter Plot**: Efficiency metrics
- **Area Chart**: Cumulative defects

### HR & People Analytics
- **Pie Chart**: Employee distribution by department
- **Bar Chart**: Satisfaction scores by team
- **Line Chart**: Headcount growth
- **Scatter Plot**: Experience vs. salary

## Export Options

Each chart can be exported:

**PNG Image**:
- Click camera icon on chart
- High-resolution download
- Transparent or white background

**PDF Report**:
- Export all charts together
- Includes data summary
- Professional formatting

[Learn more about exporting →](/features/export)

## Troubleshooting

### Chart Not Displaying

**Problem**: Chart area is empty

**Solutions**:
- Check that you selected appropriate columns
- Verify data types match chart requirements
- Ensure data is not empty
- Check browser console for errors

### Chart Looks Wrong

**Problem**: Data doesn't appear correctly

**Solutions**:
- Verify X and Y axis selections
- Check data formatting (numbers as numbers, not text)
- Try a different chart type
- Review data for anomalies

### Performance Issues

**Problem**: Chart is slow or unresponsive

**Solutions**:
- Reduce number of data points
- Aggregate data by time period
- Filter to relevant subset
- Close other browser tabs

For more help, see [Troubleshooting →](/advanced/troubleshooting)
