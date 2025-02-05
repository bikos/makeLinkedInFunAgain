# LinkedIn Suggested Hider

A Chrome extension that automatically hides suggested posts on LinkedIn, giving you a cleaner, more focused feed.

[![Chrome Web Store](https://img.shields.io/chrome-web-store/v/your-extension-id-here?label=Chrome%20Web%20Store)](https://chrome.google.com/webstore/detail/your-extension-id-here)

## Features
- Automatically hides suggested posts on LinkedIn
- Works in real-time as you scroll
- No data collection - your privacy is protected
- Lightweight and easy to use

## Installation
1. Install from the [Chrome Web Store](https://chrome.google.com/webstore/detail/your-extension-id-here)
2. Visit LinkedIn
3. Suggested posts are automatically hidden

## How It Works
The extension uses a combination of:
- DOM manipulation to hide suggested posts
- MutationObserver to detect new posts
- IntersectionObserver to handle scrolling

## Privacy
This extension does not collect, store, or share any user data. It operates entirely within your browser.

## Development
### Prerequisites
- Node.js (optional for development)
- Chrome browser

### Building
1. Clone the repository
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode"
4. Click "Load unpacked" and select the extension directory

### Testing
1. Open LinkedIn in Chrome
2. Verify that suggested posts are hidden
3. Scroll to test real-time hiding

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## License
MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Support
If you find this extension useful, please consider:
- ⭐ Starring the repository
- 🐛 Reporting any issues
- 💡 Suggesting new features
- 📣 Sharing with your network

## Disclaimer
This is an unofficial extension and is not affiliated with LinkedIn. 