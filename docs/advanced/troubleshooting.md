# Troubleshooting

Solutions to common issues you might encounter while using DataInsight AI.

## Getting Started Issues

### API Key Problems

#### Issue: "Invalid API Key"

**Symptoms**:
- Error message when trying to analyze data
- AI features not working
- "401 Unauthorized" in console

**Solutions**:

1. **Verify key format**:
   - Must start with `sk-ant-v1-`
   - Should be 100+ characters long
   - No extra spaces or line breaks

2. **Check key validity**:
   - Log into [Anthropic Console](https://console.anthropic.com/)
   - Verify key is active and not revoked
   - Check usage limits haven't been exceeded

3. **Re-enter the key**:
   - Go to Settings
   - Delete the current key
   - Copy fresh key from Anthropic Console
   - Paste and save

4. **Clear browser storage**:
   ```
   1. Open browser DevTools (F12)
   2. Go to Application > Local Storage
   3. Clear all data
   4. Re-enter API key
   ```

#### Issue: "API Key Not Found"

**Symptoms**:
- No error initially, but AI features don't work
- "Please configure API key" message

**Solutions**:
- Click Settings icon in navigation
- Enter your Claude API key
- Click Save or press Enter
- Refresh the page if needed

### Upload Issues

#### Issue: File Won't Upload

**Symptoms**:
- File selection dialog closes without action
- Drag and drop doesn't respond
- No preview appears

**Solutions**:

1. **Check file format**:
   ```
   ✓ Must be .csv extension
   ✗ Not .xlsx, .xls, .txt, etc.
   ```

2. **Verify file size**:
   - Keep under 10MB for best performance
   - Files over 50MB may fail to load
   - Consider filtering data if too large

3. **Browser permissions**:
   - Check if browser blocks file access
   - Disable strict privacy settings temporarily
   - Try a different browser

4. **File corruption check**:
   - Open CSV in text editor
   - Verify it's properly formatted
   - Check for special characters

#### Issue: "Failed to Parse CSV"

**Symptoms**:
- Upload seems to work but shows error
- Preview is empty or malformed
- Console shows parsing errors

**Solutions**:

1. **Fix CSV structure**:
   ```csv
   ✓ Good:
   Name,Age,City
   John,25,NYC
   Jane,30,LA

   ✗ Bad:
   Name Age City
   John,25,NYC
   Jane 30 LA
   ```

2. **Check encoding**:
   - Save as UTF-8 encoding
   - Avoid special encodings
   - Remove BOM (Byte Order Mark) if present

3. **Validate delimiters**:
   - Must use commas (,) not semicolons (;)
   - Consistent throughout file
   - Quoted text doesn't contain unescaped quotes

4. **Remove problematic content**:
   - No merged cells
   - No formulas (=SUM(), etc.)
   - No blank rows at the top

## Analysis Issues

### AI Analysis Not Working

#### Issue: No Insights Generated

**Symptoms**:
- Analysis panel is empty
- Spinner runs indefinitely
- No error message shown

**Solutions**:

1. **Check API key** (see above)

2. **Verify internet connection**:
   - Test other websites
   - Check firewall settings
   - Try different network

3. **Check Claude API status**:
   - Visit [status.anthropic.com](https://status.anthropic.com/)
   - Wait if service is down
   - Try again after a few minutes

4. **Review console errors**:
   ```
   1. Open DevTools (F12)
   2. Go to Console tab
   3. Look for red error messages
   4. Copy and report error details
   ```

5. **Check data requirements**:
   - Minimum 5 rows of data
   - At least 2 columns
   - Data must be properly formatted

#### Issue: Incomplete or Generic Insights

**Symptoms**:
- Insights are vague or generic
- Missing key patterns
- Low confidence scores

**Solutions**:

1. **Improve data quality**:
   - Add descriptive column names
   - Include more rows (100+ recommended)
   - Ensure varied data
   - Remove excessive missing values

2. **Check data sample**:
   - First 5 rows are representative
   - No empty cells in sample
   - Includes all data types

3. **Add context to columns**:
   ```
   ✓ Better: Sales_Amount_USD, Customer_Region, Order_Date
   ✗ Generic: Col1, Col2, Col3
   ```

## Chart Issues

### Charts Not Displaying

#### Issue: Empty Chart Area

**Symptoms**:
- Chart container visible but empty
- No error message
- Other charts work fine

**Solutions**:

1. **Verify column selection**:
   - X-axis and Y-axis properly selected
   - Columns contain appropriate data types
   - No empty columns selected

2. **Check data types**:
   ```
   Bar/Line Chart: Needs numeric Y-axis
   Pie Chart: Needs numeric values
   Scatter Plot: Needs two numeric columns
   ```

3. **Validate data**:
   - Selected columns have data
   - No all-null columns
   - Numeric columns don't contain text

#### Issue: Chart Rendering Incorrectly

**Symptoms**:
- Axes labels missing or wrong
- Data points in wrong places
- Colors not showing

**Solutions**:

1. **Refresh the page**:
   - Simple reload often fixes rendering issues
   - Re-upload data if needed

2. **Try different chart type**:
   - Some data works better with certain charts
   - Review recommendations from AI

3. **Check browser compatibility**:
   - Use modern browser (Chrome, Firefox, Edge, Safari)
   - Update to latest version
   - Disable problematic extensions

4. **Reduce data complexity**:
   - Filter to fewer data points
   - Aggregate data if too granular
   - Simplify grouping

### Performance Issues

#### Issue: Slow Loading or Laggy Interface

**Symptoms**:
- Charts take long to render
- UI freezes or stutters
- Browser becomes unresponsive

**Solutions**:

1. **Reduce file size**:
   - Remove unnecessary columns
   - Aggregate data (e.g., daily → monthly)
   - Filter to recent time periods
   - Sample large datasets

2. **Optimize browser**:
   - Close unnecessary tabs
   - Clear browser cache
   - Disable extensions temporarily
   - Restart browser

3. **System resources**:
   - Close other applications
   - Check available RAM
   - Use desktop instead of mobile for large files

4. **Data optimization**:
   ```
   Too many points: Aggregate or sample
   Too many categories: Group into "Other"
   Too many columns: Select relevant subset
   ```

## Export Issues

### Export Not Working

#### Issue: Export Button Does Nothing

**Symptoms**:
- Click export but nothing happens
- No download prompt
- No error message

**Solutions**:

1. **Check browser settings**:
   - Allow downloads from this site
   - Disable popup blocker for this site
   - Check download location settings

2. **Try different format**:
   - PNG instead of PDF
   - Individual charts instead of full report

3. **Browser compatibility**:
   - Try different browser
   - Update current browser
   - Check browser console for errors

#### Issue: Poor Export Quality

**Symptoms**:
- Blurry or pixelated exports
- Colors look wrong
- Text is unreadable

**Solutions**:

1. **Increase quality setting**:
   - Use "High" or "Ultra" quality
   - Export at 2x or 3x resolution

2. **Check theme**:
   - Use light theme for print
   - Dark theme for screen viewing
   - Consistent theme across exports

3. **Verify original chart**:
   - If chart looks bad on screen, export will too
   - Fix chart display first
   - Then re-export

## Browser-Specific Issues

### Chrome

**Issue**: Extensions interfering
- Disable ad blockers
- Disable privacy extensions temporarily
- Try incognito mode

**Issue**: Memory errors
- Close other tabs
- Clear cache and cookies
- Restart Chrome

### Firefox

**Issue**: Slow performance
- Disable hardware acceleration
- Clear browser cache
- Update to latest version

### Safari

**Issue**: CSV not uploading
- Check file permissions
- Allow file access in settings
- Try different file location

### Edge

**Issue**: Compatibility problems
- Ensure Edge is up to date
- Reset browser settings
- Try compatibility mode

## Network Issues

### Slow API Responses

**Solutions**:
- Check internet speed
- Use wired connection if possible
- Try different network
- Wait for better connection

### Connection Timeouts

**Solutions**:
- Increase browser timeout settings
- Retry request
- Check firewall rules
- Verify no VPN interference

## Data Quality Issues

### Missing Values

**Problem**: Too many null/empty values

**Solutions**:
- Fill missing values before upload
- Use consistent placeholder (e.g., "N/A")
- Remove rows with excessive missing data
- Address data quality at source

### Inconsistent Data Types

**Problem**: Mixed data types in same column

**Solutions**:
```
✗ Bad column:
  "100", "200", "N/A", "150"

✓ Good column:
  100, 200, null, 150
```

- Standardize data types
- Convert all to same format
- Remove or fix invalid entries

### Date Format Issues

**Problem**: Dates not recognized

**Solutions**:
- Use ISO format: YYYY-MM-DD
- Be consistent throughout column
- Avoid ambiguous formats like 01/02/03

## Getting More Help

### Collect Error Information

Before seeking help, gather:

1. **Error message**: Exact text or screenshot
2. **Browser**: Name and version
3. **Steps to reproduce**: What you did before error
4. **Console logs**: Any errors in DevTools console
5. **Data sample**: First few rows (if shareable)

### Where to Get Help

1. **Documentation**:
   - Review [FAQ](/advanced/faq)
   - Check [Best Practices](/advanced/best-practices)
   - Read feature guides

2. **Community**:
   - GitHub Issues (for bugs)
   - Community forums
   - Discord server

3. **Support Channels**:
   - Email support
   - GitHub Discussions
   - Twitter/X support handle

### Reporting Bugs

When reporting bugs, include:

```
**Bug Description**:
Clear description of the problem

**Steps to Reproduce**:
1. Go to...
2. Click on...
3. See error

**Expected Behavior**:
What should happen

**Actual Behavior**:
What actually happens

**Environment**:
- Browser: Chrome 120
- OS: Windows 11
- File size: 5MB
- Rows: 10,000

**Screenshots**:
[If applicable]

**Console Errors**:
[Copy from DevTools]
```

## Known Issues

### Current Limitations

1. **File size**: Performance degrades with files >10MB
2. **Chart types**: Limited selection (more coming)
3. **Mobile**: Optimized for desktop, mobile experience varies
4. **Offline**: Requires internet for AI features

### Upcoming Fixes

Check GitHub releases for:
- Bug fixes
- Performance improvements
- New features
- Known issue resolutions

## Quick Diagnostic Checklist

When something isn't working, check:

- [ ] API key is set and valid
- [ ] File is proper CSV format
- [ ] Browser is up to date
- [ ] Internet connection is working
- [ ] No console errors (F12)
- [ ] Sufficient browser memory
- [ ] File size is reasonable
- [ ] Data is properly formatted
- [ ] Tried refreshing the page
- [ ] Tried different browser

## Emergency Troubleshooting

If all else fails:

1. **Export your data** (if possible)
2. **Close browser completely**
3. **Clear browser cache and cookies**
4. **Restart computer**
5. **Try different browser**
6. **Re-upload data**
7. **Re-enter API key**

Most issues resolve with these steps!

---

Still having issues? [Contact Support →](#getting-more-help)
