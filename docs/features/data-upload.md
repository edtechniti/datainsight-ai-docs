# Data Upload

Learn how to upload and prepare your CSV data for visualization.

## Upload Methods

### Method 1: Click to Upload

1. Click the **Upload CSV** button in the main interface
2. Browse your file system
3. Select your CSV file
4. File uploads and processes instantly

### Method 2: Drag & Drop

1. Drag your CSV file from your file manager
2. Drop it anywhere on the application window
3. File processes automatically

::: tip
Drag & drop is the fastest way to upload files!
:::

## File Requirements

### Format Requirements

Your CSV file should meet these requirements:

✅ **File Extension**: `.csv`
✅ **Encoding**: UTF-8 (recommended)
✅ **Header Row**: First row should contain column names
✅ **Delimiter**: Comma (`,`)
✅ **File Size**: Up to 10MB recommended for best performance

### Data Structure

**Good CSV Structure:**
```csv
Product,Sales,Region,Date
Widget A,1500,North,2024-01-15
Widget B,2300,South,2024-01-16
Widget C,1800,East,2024-01-17
```

**Poor CSV Structure:**
```csv
Product Sales Region Date
Widget A,1500,North,2024-01-15
,,,
Widget B,2300,,2024-01-16
Merged Cell Data,,,
```

## Supported Data Types

DataInsight AI automatically detects and handles these data types:

### Numeric Data
- **Integers**: `1, 42, 1000`
- **Decimals**: `3.14, 99.99, 0.5`
- **Negative numbers**: `-10, -5.5`
- **Large numbers**: `1,000,000` (commas are handled)

### Text Data
- **Strings**: Any text content
- **Categories**: Product names, regions, types
- **IDs**: Customer IDs, order numbers

### Date/Time Data
- **ISO Format**: `2024-01-15`
- **US Format**: `01/15/2024`
- **EU Format**: `15/01/2024`
- **With time**: `2024-01-15 14:30:00`

### Boolean Data
- **True values**: `true, TRUE, yes, 1`
- **False values**: `false, FALSE, no, 0`

## Data Validation

Upon upload, the system automatically:

### ✅ Checks Performed

1. **File Format**: Validates CSV structure
2. **Column Headers**: Ensures headers exist and are unique
3. **Data Types**: Identifies numeric, text, date columns
4. **Missing Values**: Detects empty cells
5. **Row Count**: Verifies minimum data requirements
6. **Column Count**: Checks for consistency

### 🚨 Common Issues

| Issue | Description | Solution |
|-------|-------------|----------|
| Empty file | File has no data rows | Add data to your CSV |
| Missing headers | First row is data, not headers | Add header row |
| Inconsistent columns | Rows have different column counts | Fix CSV structure |
| Large file | File > 10MB | Consider filtering data |
| Invalid encoding | Special characters appear wrong | Save as UTF-8 |

## Data Preview

After upload, you'll see:

### Preview Table
- First 100 rows of your data
- Scrollable horizontal and vertical
- Column type indicators
- Missing value highlights

### Data Summary
- **Total Rows**: Number of data records
- **Total Columns**: Number of fields
- **Column Types**: Breakdown by type
- **Missing Data**: Percentage of empty cells

## Handling Large Files

For files larger than 10MB:

### Performance Tips

1. **Filter unnecessary columns** - Remove columns you won't analyze
2. **Aggregate data** - Pre-aggregate before upload
3. **Split data** - Break into multiple files if needed
4. **Sample data** - Use a representative sample

### Browser Limitations

Keep in mind:
- **Memory**: Browser has limited memory
- **Processing time**: Large files take longer to parse
- **Chart rendering**: Too many data points may slow charts

::: warning
Files larger than 50MB may cause browser performance issues.
:::

## Privacy & Security

### Your Data Stays Private

- ✅ **No server upload** - Files processed locally in browser
- ✅ **No storage** - Data deleted when you close the tab
- ✅ **No tracking** - We don't see or store your data

### Security Best Practices

1. Don't upload files with sensitive personal data to public computers
2. Close browser tab when done to clear data from memory
3. Use private/incognito mode for extra privacy
4. Keep your API key secure and never share it

## After Upload

Once your file is uploaded:

1. **AI Analysis begins** automatically
2. **Insights appear** in the insights panel
3. **Chart recommendations** are generated
4. **Query interface** becomes active

Ready to analyze? Continue to [AI-Powered Analysis →](/features/ai-analysis)

## Troubleshooting

### File Won't Upload

**Problem**: File selection dialog closes without uploading

**Solutions**:
- Check file extension is `.csv`
- Verify file size is reasonable
- Try drag & drop instead
- Check browser console for errors

### Parse Errors

**Problem**: "Unable to parse CSV file"

**Solutions**:
- Open CSV in text editor to check format
- Ensure commas are used as delimiters
- Remove any special formatting
- Check for unescaped quotes

### Slow Processing

**Problem**: File takes too long to process

**Solutions**:
- Reduce file size
- Close other browser tabs
- Try a different browser
- Consider sampling your data

For more help, see [Troubleshooting →](/advanced/troubleshooting)
