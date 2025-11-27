# Frequently Asked Questions

Quick answers to common questions about DataInsight AI.

## Getting Started

### Do I need to install anything?

No! DataInsight AI is a web application that runs entirely in your browser. Just open the app and start using it.

### Is it free?

The application itself is free to use. However, you need a Claude API key from Anthropic, which has usage-based pricing. Typical usage costs $1-3 per month for regular use.

### How do I get a Claude API key?

1. Visit [console.anthropic.com](https://console.anthropic.com/)
2. Sign up or log in
3. Navigate to API Keys
4. Create a new key
5. Copy and paste it into DataInsight AI's settings

### Do I need to create an account?

No account is required to use DataInsight AI. You only need a Claude API key for AI-powered features.

## Data & Privacy

### Where is my data stored?

Your data is **not stored anywhere**. All CSV processing happens locally in your browser. When you close the tab, your data is gone.

### Is my data sent to a server?

Your CSV data stays in your browser. Only small data samples (first 5 rows) are sent to Claude AI for analysis. No data is sent to our servers.

### Is it safe to upload sensitive data?

While the app is secure, we recommend:
- Anonymizing sensitive personal information
- Removing unnecessary confidential columns
- Using on trusted devices only
- Not using on public/shared computers

### What happens to my API key?

Your API key is stored locally in your browser's storage. It's never sent to our servers and remains on your device only.

### Can others see my visualizations?

No, unless you explicitly export and share them. All work happens in your browser session and is private to you.

## Features & Functionality

### What file formats are supported?

Currently, only CSV (Comma-Separated Values) files are supported. Excel files (.xlsx) must be saved as CSV first.

### What's the maximum file size?

While there's no hard limit, we recommend files under 10MB for best performance. Larger files may slow down your browser.

### Can I analyze multiple CSV files at once?

Currently, you can work with one CSV file at a time. Upload a new file to replace the current one.

### Can I edit my data in the app?

No, the app is view-only for visualizations. To modify data, edit your CSV file and re-upload it.

### Can I save my work?

You can export visualizations as PNG or PDF. The app doesn't save sessions, so bookmark or export important work before closing.

## AI Features

### What AI model is used?

We use Claude Sonnet 4.5 (claude-sonnet-4-5-20250929), Anthropic's latest and most capable model.

### Why do I need an API key?

The API key allows the app to securely access Claude AI on your behalf. You control usage and costs.

### How accurate are AI insights?

AI insights are generally accurate for pattern recognition and statistics. Always verify important findings with domain knowledge and visualizations.

### Can the AI make predictions?

The AI can identify trends in historical data but doesn't make predictions about future values. It analyzes what's in your data, not what might happen.

### What if AI gives wrong insights?

AI insights should be treated as suggestions. Always:
- Check the confidence score
- Verify with visualizations
- Apply your domain expertise
- Validate critical findings

### How much does AI analysis cost?

Typical costs per analysis:
- **Data analysis**: $0.01-0.03
- **Chart recommendations**: $0.01-0.02
- **Natural language query**: $0.01-0.02

Average user: $1-3 per month

## Charts & Visualization

### What chart types are available?

- Bar Charts
- Line Charts
- Pie Charts
- Scatter Plots
- Area Charts

More chart types coming soon!

### Can I customize chart colors?

Charts use predefined color schemes that adapt to light/dark mode. Custom colors are planned for future releases.

### Can I have multiple charts at once?

Yes! Create as many charts as you want and view them simultaneously. Export them all together in a PDF.

### Why isn't my chart showing correctly?

Common issues:
- Wrong data types (text in numeric field)
- Incorrect axis selection
- Empty or invalid data
- Too many data points

Check the [Troubleshooting guide](/advanced/troubleshooting) for solutions.

### Can I animate charts?

Charts have subtle animations when data updates, but full animation controls aren't currently available.

## Export & Sharing

### How do I export a chart?

Click the camera icon on any chart to export it as PNG, or use the Export PDF button to export all charts.

### What export formats are supported?

Currently:
- PNG (individual charts)
- PDF (comprehensive reports)

Coming soon:
- SVG (vector graphics)
- Share links

### Can I share my visualizations with others?

Yes! Export as PNG or PDF and share the files. Direct sharing links are coming in a future release.

### Why are my exported images blurry?

Ensure you're using high-quality export settings. Charts are exported at 2x resolution by default for crisp quality.

### Can I export just the data?

The app focuses on visualization export. For data export, use your original CSV file.

## Troubleshooting

### The app isn't loading

Try:
- Refresh the page
- Clear browser cache
- Try a different browser
- Check internet connection
- Disable browser extensions

### My CSV won't upload

Check that:
- File has .csv extension
- File is properly formatted
- File size is reasonable (<50MB)
- File isn't corrupted
- Browser allows file selection

### Charts aren't generating

Verify:
- Data uploaded successfully
- Appropriate columns selected
- Data types match chart requirements
- API key is set correctly

### AI features aren't working

Check:
- API key is valid and set
- Internet connection is active
- Browser console for errors
- Claude API status

### Performance is slow

Try:
- Close other browser tabs
- Reduce data file size
- Use a modern browser
- Clear browser cache
- Restart browser

See [Troubleshooting →](/advanced/troubleshooting) for detailed solutions.

## Browser & Technical

### Which browsers are supported?

DataInsight AI works on all modern browsers:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Does it work on mobile?

Yes! The interface is responsive and works on tablets and smartphones, though the experience is optimized for desktop.

### Do I need an internet connection?

Yes, an internet connection is required for:
- Loading the application
- AI analysis features
- Chart generation

Once loaded, basic CSV parsing works offline.

### Can I use it offline?

Basic features may work offline once loaded, but AI features require an internet connection.

### Is there a desktop app?

Currently, DataInsight AI is web-only. A desktop version may come in the future.

## Pricing & Limits

### Is there a free trial?

The application is free to use. Claude API has a free tier with limited credits for new users.

### What are the API costs?

Claude API pricing (as of 2025):
- Input: $3 per 1M tokens
- Output: $15 per 1M tokens

Typical usage: $1-3 per month

### Are there usage limits?

Limits depend on your Claude API plan:
- Free tier: Limited credits
- Paid tier: Based on your API budget

The app itself has no limits.

### Can I track my API usage?

Yes! Monitor usage in your [Anthropic Console](https://console.anthropic.com/).

### What if I exceed my API limit?

AI features will stop working until you upgrade your API plan or the limit resets. The app will show an error message.

## Features & Roadmap

### What features are coming?

Planned features:
- More chart types (heatmaps, treemaps)
- Share links for visualizations
- Data transformation UI
- Custom chart themes
- Collaborative features
- Excel file support

### Can I request a feature?

Yes! We welcome feedback and feature requests. Contact us through:
- GitHub issues
- Email
- Community forums

### How often is the app updated?

We release updates regularly with bug fixes, improvements, and new features.

### Is the code open source?

Check our GitHub repository for licensing information and contribution guidelines.

## Support

### Where can I get help?

Resources:
- This documentation
- [Troubleshooting guide](/advanced/troubleshooting)
- [Best Practices guide](/advanced/best-practices)
- Community forums
- GitHub issues

### How do I report a bug?

Report bugs via:
- GitHub issues (preferred)
- Email support
- Community forums

Include:
- Browser and version
- Steps to reproduce
- Error messages
- Screenshots if relevant

### Is there a community?

Join our community:
- GitHub Discussions
- Discord server (coming soon)
- Twitter/X updates

### Can I contribute?

Yes! Contributions welcome:
- Code contributions via GitHub
- Documentation improvements
- Bug reports
- Feature suggestions
- Community support

## Account & Settings

### Where are my settings saved?

Settings are saved in your browser's local storage. They persist between sessions but are device-specific.

### How do I reset settings?

Clear your browser's local storage or use the "Reset Settings" option in the Settings panel.

### Can I sync settings across devices?

Currently, settings are device-specific. Cloud sync may come in future releases.

### How do I change my theme?

Click the theme toggle in the top navigation to switch between light and dark modes.

### Can I change the language?

Currently, the app is English-only. Multi-language support is planned for the future.

---

## Still Have Questions?

- Check the [Getting Started guide](/guide/getting-started)
- Review [Troubleshooting](/advanced/troubleshooting)
- Explore [Best Practices](/advanced/best-practices)
- Contact support via GitHub issues
