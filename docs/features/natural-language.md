# Natural Language Queries

Ask questions about your data in plain English and get instant AI-powered answers.

## Overview

The Natural Language Query feature lets you interact with your data conversationally, without needing to know complex query languages or formulas.

## How It Works

1. **Type your question** in natural language
2. **Claude AI processes** your question with context of your data
3. **Receive an answer** with explanation and confidence score
4. **See supporting visualizations** that illustrate the answer

## Example Queries

### Statistical Questions

**"What's the average sales value?"**
```
Answer: The average sales value is $1,847.32 across all
1,247 records in the dataset.

Confidence: High (95%)
```

**"What's the median revenue by region?"**
```
Answer: Median revenue by region:
- North: $2,150
- South: $1,890
- East: $2,340
- West: $1,720

Confidence: High (98%)
Supporting Chart: Bar chart recommended
```

### Comparison Questions

**"Which product has the highest sales?"**
```
Answer: Widget B has the highest total sales at $286,450,
representing 34% of all sales and outperforming the
second-highest product (Widget A) by 18%.

Confidence: High (100%)
Supporting Chart: Bar chart showing product comparison
```

**"Compare sales between regions"**
```
Answer: Regional sales comparison:
1. East: $385,200 (31%)
2. North: $342,100 (28%)
3. South: $298,650 (24%)
4. West: $204,050 (17%)

The East region leads by 12% over the next highest region.

Confidence: High (100%)
Supporting Chart: Pie chart with regional distribution
```

### Trend Questions

**"What's the trend over the last 6 months?"**
```
Answer: Sales show a strong upward trend over the last
6 months, with consistent month-over-month growth
averaging 8.5%. No months showed decline, indicating
sustained growth momentum.

Confidence: High (92%)
Supporting Chart: Line chart showing 6-month trend
```

**"Are there any seasonal patterns?"**
```
Answer: Yes, clear seasonal patterns exist:
- Q4 sales are 35% higher than Q1
- December peaks at 15% above yearly average
- Summer months (Jun-Aug) show slight dip
- Holiday seasons drive significant spikes

Confidence: Medium (75%)
Supporting Chart: Line chart with seasonal markers
```

### Outlier & Anomaly Questions

**"Are there any unusual values?"**
```
Answer: Yes, 3 notable outliers detected:
1. March 15, 2024: Sales of $45,000 (300% above average)
2. July 4, 2024: Zero sales (holiday closure)
3. Oct 12, 2024: Sales of $38,500 (250% above average)

These represent 0.2% of all records.

Confidence: High (95%)
Supporting Chart: Scatter plot highlighting outliers
```

### Correlation Questions

**"Is there a relationship between price and sales volume?"**
```
Answer: Yes, a moderate negative correlation exists
(r = -0.64). As price increases, sales volume tends
to decrease. However, the relationship isn't perfectly
linear, suggesting other factors also influence sales.

Confidence: Medium (70%)
Supporting Chart: Scatter plot with trend line
```

## Query Types

### Descriptive Queries
Get summaries and descriptions:
- "Describe this dataset"
- "What columns are in the data?"
- "How many records are there?"
- "What time period does the data cover?"

### Statistical Queries
Ask about statistics:
- "What's the average/mean/median?"
- "What's the standard deviation?"
- "Show me the distribution"
- "What's the range of values?"

### Comparative Queries
Make comparisons:
- "Which is highest/lowest?"
- "Compare X and Y"
- "Rank by Z"
- "Show differences between groups"

### Temporal Queries
Analyze over time:
- "What's the trend?"
- "Show growth over time"
- "Compare this month to last month"
- "What's the year-over-year change?"

### Analytical Queries
Deep analysis:
- "Why did sales increase?"
- "What factors influence X?"
- "Find correlations"
- "Identify patterns"

## Understanding Responses

### Answer Components

Each response includes:

**1. Direct Answer**
- Clear, concise response to your question
- Specific numbers and percentages
- Context and interpretation

**2. Supporting Details**
- Additional relevant information
- Breakdown by categories
- Related insights

**3. Confidence Score**
- **High (90-100%)**: Based on clear data evidence
- **Medium (70-89%)**: Reasonable interpretation, some assumptions
- **Low (<70%)**: Limited data, speculative, needs validation

**4. Visualizations**
- Recommended charts to illustrate the answer
- Pre-configured with relevant data
- Click to generate instantly

### Confidence Levels Explained

**High Confidence (90-100%)**
```
Question: "What's the total sales?"
Answer: "Total sales are $1,234,567.89"
Why High: Direct calculation from data, no interpretation needed
```

**Medium Confidence (70-89%)**
```
Question: "Why did sales increase in March?"
Answer: "Sales increased likely due to seasonal factors..."
Why Medium: Requires interpretation, external factors unknown
```

**Low Confidence (<70%)**
```
Question: "Will sales continue to grow?"
Answer: "Based on current trends, growth may continue, but..."
Why Low: Predictive, many unknowns, requires careful consideration
```

## Best Practices

### Writing Good Questions

✅ **Do**:
- Be specific about what you want to know
- Mention specific columns or time periods
- Ask one question at a time
- Use clear, simple language

❌ **Don't**:
- Ask multiple questions in one query
- Use ambiguous terms
- Assume AI knows business context
- Ask questions about data not in your CSV

### Good Questions Examples

**Specific**:
- ✅ "What's the average sales for Widget A in Q4?"
- ❌ "What about that thing we discussed?"

**Clear columns**:
- ✅ "Compare Revenue column by Region"
- ❌ "Compare the money across places"

**Appropriate scope**:
- ✅ "What's the trend from Jan to March 2024?"
- ❌ "What will happen next year?" (prediction)

### Getting Better Answers

**Provide context in your question**:
```
Good: "Compare sales between North and South regions"
Better: "Compare average order value between North and South regions for Q3 2024"
```

**Be specific about calculations**:
```
Good: "What's the average?"
Better: "What's the average sales value per transaction?"
```

**Specify timeframes**:
```
Good: "Show me sales trends"
Better: "Show me monthly sales trends for the last quarter"
```

## Advanced Features

### Follow-up Questions

Ask follow-up questions for deeper insights:

```
Q1: "Which region has highest sales?"
A1: "East region with $385,200"

Q2: "What products drive East region's sales?"
A2: "Widget B accounts for 45% of East region sales..."
```

::: tip
The AI maintains context from your data but not from previous questions. Always include necessary context in each question.
:::

### Multi-part Analysis

Break complex questions into steps:

```
1. "What's the overall sales trend?"
2. "Which regions show growth?"
3. "What products are growing fastest?"
4. "Are there seasonal patterns in top products?"
```

### Data Exploration

Use queries to explore unknown data:

```
1. "What columns are in this dataset?"
2. "What's the date range?"
3. "Show me summary statistics"
4. "What categories exist in the Product column?"
```

## Limitations

### What Queries Can't Do

❌ **Modify data**: Queries are read-only
❌ **Access external data**: Only analyzes uploaded CSV
❌ **Make predictions**: Limited to historical data patterns
❌ **Guarantee accuracy**: Always verify important findings
❌ **Understand business context**: No domain knowledge

### Question Limitations

**Won't work well**:
- "Why did this happen?" (without data showing causation)
- "What should we do?" (requires business judgment)
- "Predict next month" (requires predictive models)
- "Compare to competitors" (no external data)

**Will work well**:
- "What is the average?" (descriptive statistics)
- "Which is highest?" (ranking and comparison)
- "Show the trend" (pattern identification)
- "Are these values unusual?" (outlier detection)

## Privacy & Costs

### Data Privacy

When you ask a question:
- Your question + data sample sent to Claude AI
- Processed temporarily, not stored
- Results returned to your browser
- No long-term data retention

### API Usage

Each query:
- **Input tokens**: 2,000-4,000 (question + data context)
- **Output tokens**: 300-800 (answer + explanation)
- **Cost**: ~$0.01-0.02 per query
- **Response time**: 1-3 seconds typically

## Examples by Use Case

### Sales Analysis
- "What's our best-selling product?"
- "Which month had highest revenue?"
- "Compare Q1 vs Q2 sales"
- "What's the average deal size?"

### Customer Analysis
- "Which segment has most customers?"
- "What's the average customer lifetime value?"
- "Show retention rate by cohort"
- "Which acquisition channel performs best?"

### Operations
- "What's the average processing time?"
- "Which day has highest volume?"
- "Show efficiency trends"
- "Identify bottlenecks in the data"

### Financial
- "What's the profit margin?"
- "Compare expenses by category"
- "Show cash flow trends"
- "What's the burn rate?"

## Troubleshooting

### No Response

**Problem**: Query doesn't return an answer

**Solutions**:
- Check API key is set correctly
- Verify internet connection
- Simplify your question
- Check browser console for errors

### Unclear Answer

**Problem**: Answer doesn't make sense

**Solutions**:
- Rephrase your question more specifically
- Verify data columns match your question
- Check if data has the information needed
- Try breaking into simpler questions

### Wrong Answer

**Problem**: Answer seems incorrect

**Solutions**:
- Verify your data is correct
- Check confidence score (low = less reliable)
- Cross-check with visualizations
- Try asking in a different way

For more help, see [Troubleshooting →](/advanced/troubleshooting)

## Next Steps

- Explore [Chart Types →](/features/chart-types) to visualize answers
- Learn about [Export Options →](/features/export) to save insights
- Check [Best Practices →](/advanced/best-practices) for tips
