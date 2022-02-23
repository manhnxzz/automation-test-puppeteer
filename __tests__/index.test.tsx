import puppeteer from "puppeteer";

describe("Home", () => {
  let browser: puppeteer.Browser;
  let page: puppeteer.Page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    page.emulate({
      viewport: {
        width: 1920,
        height: 1080,
      },
      userAgent: "",
    });
  });

  afterAll(async () => {
    await browser.close();
  });

  it("renders a heading", async () => {
    await page.goto("http://localhost:3000");
    await page.screenshot({ path: "__tests__/screenshots/heading.png" });
    await page.waitForSelector(".header");

    const headerElement = await page.$(".header");
    const textHeader = await page.evaluate(
      (el) => el.textContent,
      headerElement
    );
    const idHeader = await page.evaluate((el) => el.id, headerElement);
    const fontFamily = await page.evaluate(
      (el) => el.style.fontFamily,
      headerElement
    );

    // Todo: expect class, id, fontsize
    expect(textHeader).toBe("Welcome to Next.js!");
    expect(idHeader).toBe("header");
    expect(fontFamily).toBe("Roboto");
  });

  it("click button", async () => {
    await page.setViewport({ width: 1920, height: 1080 });
    await page.goto("http://localhost:3000");
    await page.waitForSelector(".open-modal");
    await page.click(".open-modal");

    // Todo: show modal
    await page.waitForSelector(".modal", { visible: true });
    await page.screenshot({ path: "__tests__/screenshots/modal.png" });

    // Select text modal title
    const modalTitle = await page.$(".modal-title");
    const textModalTitle = await page.evaluate(
      (el) => el.textContent,
      modalTitle
    );

    // Select text modal content
    const modalContent = await page.$(".modal-body");
    const textModalContent = await page.evaluate(
      (el) => el.textContent,
      modalContent
    );

    expect(textModalTitle).toBe("Modal heading");
    expect(textModalContent).toBe(
      "Woohoo, you're reading this text in a modal!"
    );
  });
});
