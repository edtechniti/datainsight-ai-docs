# AI-Powered Analysis

DataInsight AI uses Claude AI to automatically analyze your data and provide intelligent insights.

## How It Works

When you upload a CSV file, Claude AI:

1. **Examines your data structure** - Understands columns, types, and relationships
2. **Analyzes content** - Identifies patterns, trends, and anomalies
3. **Generates insights** - Creates human-readable observations
4. **Recommends actions** - Suggests next steps and visualizations

All of this happens in seconds, automatically.

## What You Get

### 📝 Dataset Summary

A concise overview of your data:

```
This dataset contains sales data with 1,247 records across
8 columns, covering transactions from January to December 2024.
The data includes product information, sales figures, regional
data, and timestamps.
```

### 💡 Key Insights

3-5 important observations about your data:

- "Sales show a strong upward trend, with 35% growth from Q1 to Q4"
- "The North region consistently outperforms other regions by 25%"
- "Product Category A accounts for 45% of total revenue"
- "Weekend sales are 40% higher than weekday sales on average"

### 📊 Patterns & Trends

Identified patterns in your data:

- **Seasonal patterns** - "Sales peak in November-December"
- **Cyclical trends** - "Weekly cycle with Sunday as peak day"
- **Correlations** - "Price and sales volume are inversely correlated"
- **Growth trends** - "Year-over-year growth of 22%"

### 🚨 Anomalies

Unusual data points that deserve attention:

- **Outliers** - "March 15th shows sales 300% above average"
- **Missing values** - "Region column has 5% missing data"
- **Data quality issues** - "3 records have negative sales values"
- **Unexpected patterns** - "Sales dropped to zero on specific dates"

### 📈 Data Quality Assessment

Evaluation of your data's reliability:

```json
{
  "completeness": "95% - Excellent",
  "consistency": "Good - Minor formatting issues",
  "accuracy": "Cannot be verified without ground truth",
  "timeliness": "Data is current as of last month"
}
```

### 🎯 Recommendations

Actionable suggestions:

- "Consider creating a time series chart to visualize the growth trend"
- "Investigate the outliers on March 15th for potential data entry errors"
- "Compare regional performance with a grouped bar chart"
- "Fill missing region values before drawing regional conclusions"

## Analysis Types

### Descriptive Analysis

Claude examines:
- **Central tendency** - Mean, median, mode
- **Spread** - Range, variance, standard deviation
- **Distribution** - Shape, skewness, outliers
- **Frequencies** - Counts and percentages

### Comparative Analysis

Claude compares:
- **Between groups** - Regional differences, category comparisons
- **Over time** - Trends, growth rates, seasonality
- **Against benchmarks** - Performance vs. targets
- **Relationships** - Correlations, dependencies

### Diagnostic Analysis

Claude investigates:
- **Why patterns exist** - Potential causes
- **What influences outcomes** - Key factors
- **Where problems occur** - Specific segments
- **When changes happen** - Inflection points

## Understanding AI Insights

### Confidence Levels

AI insights come with implicit confidence levels:

**High Confidence**:
- Based on clear statistical evidence
- Large sample sizes
- Strong patterns
- Consistent data

**Medium Confidence**:
- Based on observable trends
- Moderate sample sizes
- Some data quality issues
- Requires validation

**Lower Confidence**:
- Limited data
- High variability
- Speculative observations
- Should be verified

### Interpreting Results

When reading AI insights:

✅ **Do**:
- Use insights as starting points for investigation
- Validate important findings with domain knowledge
- Cross-reference with multiple visualizations
- Consider context and external factors

❌ **Don't**:
- Accept all insights without verification
- Make critical decisions on AI insights alone
- Ignore domain expertise
- Overlook data quality issues

## Claude AI Model

### Current Model

- **Name**: Claude Sonnet 4.5
- **Model ID**: `claude-sonnet-4-5-20250929`
- **Context Window**: 200,000 tokens
- **Strengths**:
  - Advanced reasoning capabilities
  - Excellent at pattern recognition
  - Strong statistical understanding
  - Natural language generation

### Analysis Capabilities

Claude excels at:
- **Statistical analysis** - Understands statistical concepts
- **Pattern recognition** - Identifies trends and anomalies
- **Contextual understanding** - Considers data context
- **Natural explanations** - Explains findings clearly

## Privacy & API Usage

### Your Data Privacy

- ✅ **Data sent to Claude** for analysis only
- ✅ **Not used for training** - Your data doesn't train Claude
- ✅ **Temporary processing** - Not stored by Anthropic
- ✅ **HTTPS encryption** - Secure transmission

### API Key Requirements

To use AI analysis, you need:

1. **Claude API Key** from Anthropic
2. **Stored locally** in your browser
3. **Never shared** with our servers
4. **Your control** - Use your own API budget

[Learn how to get an API key →](/guide/getting-started#step-1-get-your-claude-api-key)

### API Costs

Analysis costs are minimal:

**Typical Usage**:
- **Input tokens**: ~2,000-5,000 per analysis (depending on data size)
- **Output tokens**: ~500-1,000 per analysis
- **Cost per analysis**: $0.01-0.03

**Monthly estimates** (100 analyses):
- ~$1-3 per month for regular use

::: tip
We send only a sample of your data (first 5 rows) to reduce token usage and costs.
:::

## Optimizing AI Analysis

### Get Better Insights

**Data Preparation**:
- Use descriptive column names
- Include date/time columns for trend analysis
- Ensure consistent formatting
- Remove obviously erroneous data

**Dataset Characteristics**:
- More data = better pattern detection (up to a point)
- Multiple dimensions = richer insights
- Temporal data = trend analysis possible
- Categories = comparison opportunities

### Sample Size Considerations

Claude analyzes based on:
- **Column structure** - All columns analyzed
- **Data sample** - First 5 rows sent to API
- **Statistics** - Calculated from full dataset

This approach:
- ✅ Reduces API costs
- ✅ Protects privacy (less data sent)
- ✅ Maintains accuracy (statistics from full data)
- ✅ Enables fast analysis

## Example Analysis

### Input Data
```csv
Date,Product,Sales,Region
2024-01-01,Widget A,1500,North
2024-01-02,Widget B,2300,South
2024-01-03,Widget A,1800,East
2024-01-04,Widget C,950,West
2024-01-05,Widget B,2100,North
```

### AI Analysis Output

**Summary**:
"This sales dataset contains 5 records tracking product sales across 4 regions over 5 days in January 2024."

**Insights**:
- "Widget B has the highest average sales at $2,200 per transaction"
- "Sales range from $950 to $2,300, showing significant variation"
- "All four regions are represented equally in the sample"

**Patterns**:
- "Limited temporal data makes trend analysis challenging"
- "Widget A appears twice, suggesting it's a popular product"

**Recommendations**:
- "Collect more data for meaningful trend analysis"
- "Consider a bar chart to compare products"
- "Expand date range to identify seasonal patterns"

## Advanced Features

### Custom Analysis (Coming Soon)

Future capabilities:
- **Custom prompts** - Ask specific analysis questions
- **Focused analysis** - Analyze specific columns only
- **Comparative analysis** - Compare multiple datasets
- **Report generation** - AI-written analysis reports

### Integration Options

Potential integrations:
- **Business context** - Provide domain knowledge for richer insights
- **Historical comparison** - Compare to previous periods
- **Benchmark data** - Compare against industry standards

## Limitations

### What AI Can't Do

Be aware of limitations:

❌ **Cannot verify accuracy** - AI assumes data is correct
❌ **Cannot understand business context** - No domain knowledge
❌ **Cannot access external data** - Only analyzes uploaded data
❌ **Cannot make decisions** - Provides insights, not recommendations
❌ **Cannot guarantee completeness** - May miss subtle patterns

### When to Use Human Analysis

Rely on human expertise for:
- Critical business decisions
- Regulatory compliance
- Ethical considerations
- Complex domain-specific analysis
- Situations requiring judgment

## Next Steps

After receiving AI insights:

1. **Review visualizations** - See [Chart Types →](/features/chart-types)
2. **Ask questions** - Use [Natural Language Queries →](/features/natural-language)
3. **Export results** - Save your [insights →](/features/export)

## Troubleshooting

### No Insights Generated

**Problem**: Analysis panel shows no results

**Solutions**:
- Verify API key is set correctly
- Check browser console for errors
- Ensure data uploaded successfully
- Try refreshing the page

### Incomplete Analysis

**Problem**: Some sections missing from analysis

**Solutions**:
- Check data has sufficient rows (minimum 5)
- Ensure columns have varied data
- Verify no parsing errors occurred
- Check API response in console

For more help, see [Troubleshooting →](/advanced/troubleshooting)
