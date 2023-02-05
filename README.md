# react-testing-library-help

```
TestingLibraryElementError: Unable to find an accessible element with the role "paragraph"
```

A test that uses `getByRole('paragraph')` fails when there is a paragraph present.

I found a Stack Overflow thread with [an answer](https://stackoverflow.com/a/65123080/2948042) which states that it's not a valid role. However, `paragraph` is [a valid ARIA role](https://www.w3.org/TR/html-aria/#index-aria-paragraph) and [it's the default for a `<p>` tag](https://www.w3.org/TR/html-aria/#el-p). It was [added in June 2018](https://github.com/w3c/aria/commit/907b62da80bf3fb8bbd18768b8f9fa6ca99e1fa8).

The example in this repository is just a simple component containing a heading an a paragraph. The test file has tests for the presence of the heading and the paragraph using `getByRole()`. The paragraph test fails even though the paragraph is clearly present.

---
Hi! Need help with React Testing Library? The best way to get it is by forking
this repository, making a reproduction of your issue (or showing what you're
trying to do), and posting a link to your fork on our Discord chat:
https://testing-library.com/discord
