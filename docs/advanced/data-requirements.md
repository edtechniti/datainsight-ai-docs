# Data Requirements

Technical specifications and requirements for CSV files in DataInsight AI.

## File Format Requirements

### Basic Requirements

| Requirement | Details |
|------------|---------|
| **Format** | CSV (Comma-Separated Values) |
| **Extension** | `.csv` |
| **Delimiter** | Comma (`,`) |
| **Encoding** | UTF-8 (recommended) |
| **Line endings** | LF or CRLF |
| **BOM** | Optional (UTF-8 with or without BOM) |

### File Size Recommendations

| Size | Performance | Recommendation |
|------|-------------|----------------|
| < 1 MB | Excellent | Ideal for all features |
| 1-5 MB | Good | Works well with all features |
| 5-10 MB | Fair | May experience slight delays |
| 10-50 MB | Poor | Consider data reduction |
| > 50 MB | Very Poor | Not recommended |

## CSV Structure

### Header Row

**Required**: First row must contain column headers

```csv
✓ Correct:
Name,Age,City,Sales
John,25,NYC,1500
Jane,30,LA,2300

✗ Incorrect (no headers):
John,25,NYC,1500
Jane,30,LA,2300
```

### Column Headers

**Requirements**:
- Must be present in first row
- Should be unique
- No special characters recommended
- Keep them descriptive but concise

**Best practices**:
```csv
✓ Good headers:
Product_Name,Sales_Amount,Order_Date,Customer_Region

✓ Acceptable headers:
Product,Sales,Date,Region

✗ Problematic headers:
Product (ID),Sales ($),Date/Time,Region #1
```

### Data Rows

**Requirements**:
- Minimum 2 rows (excluding header)
- Recommended 100+ rows for meaningful analysis
- Consistent number of columns per row

**Example**:
```csv
Product,Quantity,Price
Widget A,10,99.99
Widget B,5,149.99
Widget C,15,79.99
```

## Data Types

### Supported Types

#### 1. Numeric Data

**Integers**:
```csv
Quantity,Year,Count
100,2024,42
```

**Decimals**:
```csv
Price,Rating,Temperature
99.99,4.5,72.3
```

**Negative numbers**:
```csv
Change,Profit,Adjustment
-10,-500.50,-2.5
```

**With thousands separators** (auto-handled):
```csv
Population,Revenue
1,000,000,1,500,000.00
```

#### 2. Text Data

**Plain text**:
```csv
Name,Description,Category
Widget,A useful widget,Electronics
```

**With quotes** (for commas or line breaks):
```csv
Product,Description
Widget,"A widget with features: fast, reliable, durable"
Gadget,"A gadget that includes:
- Feature 1
- Feature 2"
```

#### 3. Date and Time

**Supported formats**:

**ISO 8601** (recommended):
```csv
Date
2024-01-15
2024-01-15T14:30:00
```

**Common formats**:
```csv
Date
01/15/2024
15-Jan-2024
January 15, 2024
2024-01-15 14:30:00
```

**Best practice**: Use YYYY-MM-DD for consistency

#### 4. Boolean Data

**Accepted values**:
```csv
Active,Available,Enabled
true,TRUE,1
false,FALSE,0
yes,YES,y
no,NO,n
```

### Empty Values

**Handling null/missing data**:

```csv
✓ Acceptable:
Name,Age,City
John,25,NYC
Jane,,LA
Bob,35,

✓ Better with explicit marker:
Name,Age,City
John,25,NYC
Jane,null,LA
Bob,35,N/A
```

## Column Requirements

### Minimum Columns

- **Absolute minimum**: 2 columns
- **Recommended**: 3+ columns for rich insights
- **Optimal**: 5-10 columns for comprehensive analysis

### Maximum Columns

- **Technical limit**: 1000 columns
- **Practical limit**: 50 columns
- **Recommended**: 20 columns or fewer for best UX

### Column Types for Charts

Different chart types require specific column configurations:

#### Bar Chart
```
Required: 1 categorical + 1 numeric column
Example:
  Category,Value
  Product A,100
  Product B,150
```

#### Line Chart
```
Required: 1 temporal/sequential + 1 numeric column
Example:
  Date,Sales
  2024-01-01,1500
  2024-01-02,1750
```

#### Pie Chart
```
Required: 1 categorical + 1 numeric column
Example:
  Region,Sales
  North,3500
  South,2800
```

#### Scatter Plot
```
Required: 2 numeric columns
Example:
  Price,Sales
  10.99,450
  15.99,320
```

#### Area Chart
```
Required: 1 temporal/sequential + 1 numeric column
Example:
  Month,Total_Users
  Jan,1000
  Feb,1450
```

## Data Quality Requirements

### For AI Analysis

**Minimum data quality**:
- At least 5 rows of data
- < 50% missing values per column
- Consistent data types within columns
- Valid date formats where applicable

**Optimal data quality**:
- 100+ rows of data
- < 10% missing values
- Well-formatted dates
- Descriptive column names
- No duplicate rows (unless intentional)

### For Chart Generation

**Minimum**:
- At least 2 data points
- Valid numeric data for value fields
- Non-empty category labels

**Optimal**:
- 5-100 data points for most charts
- Complete data (no missing values in key fields)
- Distinct categories
- Reasonable value ranges (no extreme outliers)

## File Encoding

### UTF-8 (Recommended)

**Advantages**:
- Supports all characters
- International character support
- Modern standard

**How to save as UTF-8**:

**Excel**:
```
File → Save As → CSV UTF-8 (Comma delimited)
```

**Google Sheets**:
```
File → Download → Comma Separated Values (.csv)
(Automatically UTF-8)
```

**Text Editor**:
```
Save As → Encoding: UTF-8
```

### Other Encodings

**Supported**:
- ASCII
- UTF-8 with BOM
- ISO-8859-1 (Latin-1)

**Not recommended**:
- UTF-16
- Windows-1252
- Other legacy encodings

## Special Characters

### Allowed Characters

**In data values**:
- Letters: A-Z, a-z
- Numbers: 0-9
- Common punctuation: . , ! ? - _ @
- International characters: é, ñ, ü, etc.

**In quoted fields**:
```csv
Product,Description
Widget,"Features: fast, reliable, durable"
```

### Problematic Characters

**Avoid in column names**:
- Quotes: " '
- Slash: / \
- Brackets: [ ] { }
- Special symbols: @ # $ % & *

**Escape properly**:
```csv
✓ Correct:
Name,Description
Widget,"Contains ""quotes"" inside"

✗ Incorrect:
Name,Description
Widget,Contains "quotes" inside
```

## Delimiter Requirements

### Standard Delimiter

**Must use**: Comma (`,`)

```csv
✓ Correct:
Name,Age,City
John,25,NYC

✗ Incorrect (semicolon):
Name;Age;City
John;25;NYC
```

### Handling Commas in Data

**Use quotes**:
```csv
Address,City,Country
"123 Main St, Apt 4",NYC,USA
```

## Line Endings

### Supported Formats

- **Unix/Mac**: LF (`\n`)
- **Windows**: CRLF (`\r\n`)
- **Old Mac**: CR (`\r`) - not recommended

Most modern tools handle all formats automatically.

## File Naming

### Recommendations

**Good file names**:
```
sales_data_2024.csv
customer_analytics_q1.csv
product_inventory_jan.csv
```

**Avoid**:
```
data.csv (too generic)
Sales Report (Final) v2 EDITED.csv (too complex)
销售数据.csv (non-ASCII, may cause issues)
```

## Data Validation Checklist

Before uploading, verify:

### Structure
- [ ] File has .csv extension
- [ ] First row contains headers
- [ ] Headers are unique
- [ ] All rows have same number of columns
- [ ] File size under 10MB (recommended)

### Content
- [ ] At least 2 columns
- [ ] At least 2 data rows
- [ ] No completely empty columns
- [ ] Numeric columns contain numbers
- [ ] Dates in consistent format
- [ ] Missing values handled consistently

### Format
- [ ] UTF-8 encoding
- [ ] Comma delimiters
- [ ] Quoted fields with commas/line breaks
- [ ] No special formatting (colors, formulas)
- [ ] Plain text only

### Quality
- [ ] No duplicate headers
- [ ] Reasonable value ranges
- [ ] Consistent data types per column
- [ ] Descriptive column names
- [ ] < 20% missing values

## Converting from Other Formats

### From Excel (.xlsx, .xls)

**Method 1: Excel**:
```
1. Open file in Excel
2. File → Save As
3. Choose "CSV UTF-8 (Comma delimited)"
4. Save
```

**Method 2: Google Sheets**:
```
1. Upload Excel to Google Drive
2. Open with Google Sheets
3. File → Download → CSV
```

### From Google Sheets

```
1. Open your sheet
2. File → Download → Comma Separated Values (.csv)
3. File downloads automatically
```

### From Database

**SQL Export**:
```sql
COPY (SELECT * FROM table_name)
TO '/path/to/output.csv'
WITH CSV HEADER;
```

**Most databases**:
- Export/Export Data option
- Choose CSV format
- Include headers
- Use comma delimiter

## Example Files

### Minimal Valid CSV

```csv
Name,Value
A,1
B,2
```

### Well-Formatted CSV

```csv
Product_Name,Sales_Amount,Order_Date,Customer_Region,Quantity
Widget A,1500.00,2024-01-15,North,10
Widget B,2300.50,2024-01-16,South,15
Widget C,1800.25,2024-01-17,East,12
```

### Complex Valid CSV

```csv
Order_ID,Customer_Name,Product,Quantity,Unit_Price,Total,Order_Date,Status
1001,"Smith, John",Widget A,10,99.99,999.90,2024-01-15,Completed
1002,"Johnson, Jane","Gadget B (Premium Edition)",5,149.99,749.95,2024-01-16,Pending
1003,"Brown, Bob",Widget C,15,79.99,1199.85,2024-01-17,Completed
```

## Testing Your CSV

### Online Validators

- [CSV Lint](http://csvlint.io/)
- [CSV Validator](https://www.csvvalidator.com/)

### Manual Check

1. Open in text editor
2. Verify structure visually
3. Check for:
   - Consistent commas
   - Proper quoting
   - No extra line breaks
   - Clean data

### Test Upload

1. Upload to DataInsight AI
2. Check preview table
3. Verify all columns appear
4. Confirm data types recognized correctly

---

For more help, see [Troubleshooting →](/advanced/troubleshooting) or [FAQ →](/advanced/faq)
