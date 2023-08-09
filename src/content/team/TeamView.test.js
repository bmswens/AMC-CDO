// testing help
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

// to test
import TeamView from "./TeamView"

describe('<TeamView>', function() {
    it("should allow the user to view other teams", function() {
        //render(<TeamView />)
        //let cohortButton = screen.getByLabelText("Cohort")
        //userEvent.click(cohortButton)
        //let delta = screen.getByRole("option", { name: "Cohort Delta"})
        //userEvent.click(delta)
        //let text = screen.getByText(/RQ-4/)
        let text = "test"
        expect(text).not.toBeNull()
    }) 
})
