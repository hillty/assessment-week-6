
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    await driver.get('http://localhost:3000/')
})

afterAll(async () => {
    await driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(2000)
})

describe('automated tests', () => {
    test('draw button displays div with id=choices', async () => {

        //TEST 1:
        // this will click the draw button:
        const drawBtn = await driver.findElement(By.id('draw'))
        await drawBtn.click()
        await driver.sleep(2000)

        // this will selects the div with id of "choices":
        const choicesId = await driver.findElement(By.id('choices'))

        // set variable to div being displayed:
        const result = await choicesId.isDisplayed()

        // expect draw button to display div with id choices to be true:
        expect(result).toBe(true)
        await driver.sleep(2000)
        
        //TEST 2:
        // this will click the "add to duo" button:
        const duoBtn = await driver.findElement(By.xpath("//button[@class='bot-btn']"))
        await duoBtn.click()
        await driver.sleep(2000)
        // this will select the div with id of "player-duo":
        const playerId = await driver.findElement(By.id('player-duo'))
        const result2 = await playerId.isDisplayed()
        // expect add to duo button to display div with id player uo to be true:
        expect(result2).toBe(true)
        await driver.sleep(2000)
    })
})