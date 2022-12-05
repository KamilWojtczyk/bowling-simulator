import { FormBuilder } from "@angular/forms";
import { BowlingService } from "src/app/state/bowling/services/bowling.service";
import { Frames } from "src/app/state/bowling/services/models/add-new-frame-model";
import { StartComponent } from "./start.component";

describe( 'StartComponent', () => {
    let fixture: StartComponent;
    let bowlingServiceMock: BowlingService;
    let formBuilderMock: FormBuilder;

    beforeEach(() => {
        fixture = new StartComponent(
            formBuilderMock,
            bowlingServiceMock
        );
    })

    describe('Setup component', () => {
        describe('ngOnInit', () => {
            it('should call generateForm', () => {
                const generateForm = jest.spyOn( fixture, 'generateForm' );

                fixture.ngOnInit();
				
				expect( generateForm ).toBeCalled;
            })
        })
    })

    describe('generateForm', () => {
        it('should generate form with default values', () => {
            const expectedResult: Frames = {
                first: 0,
                second: 0,
                third: 0
            }

            expect ( fixture.form.value ).toEqual( expectedResult );


        })
    })
});