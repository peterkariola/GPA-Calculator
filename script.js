
        // Html Selectors
        let name = document.querySelector('.name-gpa-calc')
        let semester = document.querySelector('.semester-gpa-calc')
        let institution = document.querySelector('.institution-gpa-calc')
        let academicSession = document.querySelector('.academic-session-gpa-calc')
        let btnCalcGpa = document.querySelector('.btn-gpa-calc-submit')
        let btnGpaCalcInfo = document.querySelector('.btn-gpa-calc-section')
        let btnReset = document.querySelector('.btn-gpa-calc-reset')
        let grades = document.querySelectorAll('.grade-select')
        let courseUnits = document.querySelectorAll('.course-unit-select')
        let gpaCheckName = document.querySelector('.gpa-checker-name')
        let gpaAlertDisplay = document.querySelector('.gpa-alert-display')
        let gpaCheckHonor = document.querySelector('.gpa-checker-honor')
        let gpaCheckerSchool = document.querySelector('.gpa-checker-school')
        let gpaCheckerAcademicSession = document.querySelector('.gpa-checker-academic-session')
        let gpaCheckerSemester= document.querySelector('.gpa-checker-semester')
        let GpaInfoSelect = document.querySelector('.display-info-gpa-select')
        let uniTypeInfo = document.querySelector('.uni-type-info')
        let GradeScaleInfo= document.querySelector('.grade-scale')
        let errorLog= document.querySelector('.error-log')
        let gradeFullScaleInfo = document.querySelector('.grade-full-info')
        let totalSum = 0;
        let totalCourseUnit = 0; 
        let gpaValue = document.querySelector('.gpa')
        let overlay = document.querySelector('.overlay-container') 
        let overlayContainerGuides = document.querySelector('.overlay-container-guide')
        let svgClose = document.querySelector('.svg-close')
        let svgCloseUniInfo = document.querySelector('.svg-close-uni-info')
        let svgCloseInfoGuide = document.querySelector('.svg-close-info-guide')
        let svgMenuClose = document.querySelector('.svg-menu-close')        
        let svgMenuOpen = document.querySelector('.svg-menu-open')  
        let mobileMenuSection = document.querySelector('.mobile-menu')       

        // Modal Value POPup change with DOM function
        function modalValueChange(){
            gpaCheckName.textContent = name.value;
            gpaCheckerSchool.textContent = institution.options[institution.selectedIndex].text
            gpaCheckerSemester.textContent = semester.options[semester.selectedIndex].text
            gpaCheckerAcademicSession.textContent = academicSession.options[academicSession.selectedIndex].text
        }
                                    
                // Honour Type Decoder
                function honorDecoder(a,b,c,d,e,f,g,h,i){
        if (Number(gpaValue.textContent) <= a ){
            if (uniFivePointZero() ||  uniFourPointZero()
            ) {
                gpaCheckHonor.textContent = 'Pass Honour'
            }
            else if (polyPointFour()
            ){
                gpaCheckHonor.textContent = 'Fail'
            }
     
        }

        else if(Number(gpaValue.textContent) >= b && Number(gpaValue.textContent) <= c){
            if (uniFivePointZero() ||  uniFourPointZero()
            ) {
                gpaCheckHonor.textContent = 'Third Class Honour'
            }
            else if (polyPointFour()
            ){
                gpaCheckHonor.textContent = 'Pass'
            }
    
        }

        else if(Number(gpaValue.textContent) >=d && Number(gpaValue.textContent) <=e){
            if (uniFivePointZero() ||  uniFourPointZero()
            ) {
                gpaCheckHonor.textContent = 'Second Class Lower Honour'
            }
            else if (polyPointFour()
            ){
                gpaCheckHonor.textContent = 'Lower Credit'
            }
     
        }


            else if(Number(gpaValue.textContent) >=f && Number(gpaValue.textContent) <=g){
                if (uniFivePointZero() ||  uniFourPointZero()
            ) {
                gpaCheckHonor.textContent = 'Second Class Upper Honour'
            }
            else if (polyPointFour()
            ){
                gpaCheckHonor.textContent = 'Upper Credit'
            }
   
        }


        else if(Number(gpaValue.textContent) >=h && Number(gpaValue.textContent) <=i){

        
            if (uniFivePointZero() ||  uniFourPointZero()
            ) {
                gpaCheckHonor.textContent = 'First Class Honour'
            }
            else if (polyPointFour()
            ){
                gpaCheckHonor.textContent = 'Distinction'
            }
            
        }
    }

    // Determine the level of Grade to calculate points for each grade e.g. A = 5 points
       function gradeDeterminer(x){
        let  gradeVariable = x; 
                let lineOneCalc = (gradeVariable * Number(courseUnits[i].value))
                 totalSum += lineOneCalc
                console.log(totalSum)
       }
        

    function uniFivePointZero(){
      let x =  institution.options[institution.selectedIndex].value === 'oau' || institution.options[institution.selectedIndex].value === 'uniosun'
            || institution.options[institution.selectedIndex].value === 'unilag' || institution.options[institution.selectedIndex].value === 'unilorin' 
            || institution.options[institution.selectedIndex].value === 'Unilag' || 
            institution.options[institution.selectedIndex].value === 'AbuZaria' || institution.options[institution.selectedIndex].value === 'Funaab' 
             || institution.options[institution.selectedIndex].value === 'lasu' || institution.options[institution.selectedIndex].value === 'uniport'
                || institution.options[institution.selectedIndex].value === 'run' || institution.options[institution.selectedIndex].value === 'cu' ||
                institution.options[institution.selectedIndex].value === 'futa' || institution.options[institution.selectedIndex].value === 'bowen' ||
                institution.options[institution.selectedIndex].value === 'babcock' || institution.options[institution.selectedIndex].value === 'fuoye' || 
                institution.options[institution.selectedIndex].value === 'delsu' || institution.options[institution.selectedIndex].value === 'lautech' || 
                institution.options[institution.selectedIndex].value === 'eksu' || institution.options[institution.selectedIndex].value === 'unical'
             return x;
    }

    function uniFourPointZero(){
       let x = institution.options[institution.selectedIndex].value === 'ui';
       return x;
    }

    function polyPointFour(){
        let x= institution.options[institution.selectedIndex].value === 'kwarapoly' || 
     institution.options[institution.selectedIndex].value === 'igbajopoly' || 
     institution.options[institution.selectedIndex].value === 'ibadanpoly' 
     return x;
     
    }

    // The detail of point Calculation for all schools button Select 
    institution.addEventListener('change', function(){
        if(uniFivePointZero()){
            GpaInfoSelect.style.display = 'block';
            GradeScaleInfo.textContent = '5 points grading system (0-5) for A-F respectively and this grading system will be used for this GPA Calculation you are about to carry out. '
            gradeFullScaleInfo.textContent = 'A = 5, B = 4, C = 3, D = 2, E = 1, F=0 '
            uniTypeInfo.textContent = institution.options[institution.selectedIndex].text
        }
        else if(uniFourPointZero()){
            GpaInfoSelect.style.display = 'block';
            uniTypeInfo.textContent = institution.options[institution.selectedIndex].text
            GradeScaleInfo.textContent = '4 points grading system (0-4)  for A-F respectively  and this grading system will be used for this GPA Calculation you are about to carry out. '
            gradeFullScaleInfo.textContent = ' A = 4, B = 3, C = 2, D = 1, E = 0, F=0 '
        }

        else if(polyPointFour){
            GpaInfoSelect.style.display = 'block';
            uniTypeInfo.textContent = institution.options[institution.selectedIndex].text
            GradeScaleInfo.textContent = '4 points grading system (0-4)  for A-F respectively  and this grading system will be used for this GPA Calculation you are about to carry out. '
            gradeFullScaleInfo.textContent = ' A = 4, AB = 3.5, B = 3.25, BC = 3.0 C = 2.75, CD = 2.5, D = 2.25, E = 2.00 F = 0 '

        }

    })
     
    svgCloseUniInfo.addEventListener('click', function(){
        GpaInfoSelect.style.display = 'none'
    })
        
     
        // Button Click for calculate GPA
        btnCalcGpa.addEventListener('click', function(event){
            event.preventDefault();
            console.log(institution.options[institution.selectedIndex].value)
            if(institution.options[institution.selectedIndex].value === 'noschool'){
                console.log('You entered the wrong school my Oga')
                errorLog.style.display = 'block'

            }
            //  GPA Clculation of Instituions with 5.0 grading SYstem
            
             if (uniFivePointZero()){
                modalValueChange()
           

              for (i = 0; i < 20; i++){

                
                if(grades[i].value === 'A' || grades[i].value === 'a'){
                    gradeDeterminer(5)
                }                 
                else if(grades[i].value === 'B' || grades[i].value === 'b'){
                    gradeDeterminer(4)
            }     
            else if(grades[i].value === 'C' || grades[i].value === 'c'){  
                gradeDeterminer(3)
            }                 
            else if(grades[i].value === 'D' || grades[i].value === 'd'){
                gradeDeterminer(2)

            } 
            else if(grades[i].value === 'E' || grades[i].value === 'e'){
                gradeDeterminer(1)
            } 
            else if(grades[i].value === 'F' || grades[i].value === 'f'){
                gradeDeterminer(0)
            } 
            else if(grades[i].value === ''){
                gradeDeterminer(0)
            } 

            else{
                totalSum = 0;
                 console.log('something is wrong with your calculation')
            }
            
            overlay.style.display = 'flex';
         

        }

 
      
    }
       
        // University of Ibadan GPA Calculation with 4.0
                    
        else if (uniFourPointZero()
            ){
                modalValueChange()
                console.log(modalValueChange())
            for (i = 0; i < 20; i++){
            console.log('This is UI')


            if(grades[i].value === 'A' || grades[i].value === 'a'){
                gradeDeterminer(4)
            }                 
            else if(grades[i].value === 'B' || grades[i].value === 'b'){
                gradeDeterminer(3)
            }     
            else if(grades[i].value === 'C' || grades[i].value === 'c'){  
                gradeDeterminer(2)
            }                 
            else if(grades[i].value === 'D' || grades[i].value === 'd'){
                gradeDeterminer(1)

            } 
            else if(grades[i].value === 'E' || grades[i].value === 'e'){
                gradeDeterminer(0)
            } 
            else if(grades[i].value === 'F' || grades[i].value === 'f'){
                gradeDeterminer(0)
            } 
            else if(grades[i].value === ''){
                gradeDeterminer(0)
            } 

        }
        overlay.style.display = 'flex';
         
    }

    else if (polyPointFour()){
        modalValueChange()
        
            for (i = 0; i < 20; i++){
            console.log('This is Polytechnics')


            if(grades[i].value === 'A' || grades[i].value === 'a'){
                let gradeOne = 4.00; 
                let lineOneCalc = (gradeOne * Number(courseUnits[i].value))
                 totalSum += lineOneCalc
                console.log(totalSum)
            }                 
            else if(grades[i].value === 'AB' || grades[i].value === 'ab' 
            || grades[i].value === 'Ab' || grades[i].value === 'bA'){
                let gradeTwo = 3.50;    
                // console.log(gradeTwo * Number(courseUnits[i].value))
                let lineOneCalc = (gradeTwo * Number(courseUnits[i].value))
                 totalSum += lineOneCalc
                console.log(totalSum)
            }     
            else if(grades[i].value === 'B' || grades[i].value === 'b'){  
                let gradeThree = 3.25;  
                console.log(gradeThree * Number(courseUnits[i].value))  
                let lineOneCalc = (gradeThree * Number(courseUnits[i].value))
                 totalSum += lineOneCalc
                console.log(totalSum)
            }                 
            else if(grades[i].value === 'BC' || grades[i].value === 'bc' 
            || grades[i].value === 'Bc' || grades[i].value === 'bC'){
                let gradeFour = 3.00;    
                // console.log(gradeFour * Number(courseUnits[i].value))
                let lineOneCalc = (gradeFour * Number(courseUnits[i].value))
                 totalSum += lineOneCalc
                console.log(totalSum)

            } 
            else if(grades[i].value === 'C' || grades[i].value === 'c'){
                let gradeFive = 2.75;    
                // console.log(gradeFive * Number(courseUnits[i].value))
                let lineOneCalc = (gradeFive * Number(courseUnits[i].value))
                 totalSum += lineOneCalc
                console.log(totalSum)
            } 
            else if(grades[i].value === 'CD' || grades[i].value === 'cd' 
            || grades[i].value === 'Cd' || grades[i].value === 'cD'){
                let gradeSix = 2.5;    
                // console.log(gradeSix * Number(courseUnits[i].value))
                let lineOneCalc = (gradeSix * Number(courseUnits[i].value))
                 totalSum += lineOneCalc
                console.log(totalSum)
            } 
            else if(grades[i].value === 'D' || grades[i].value === 'd' ){
                let gradeSeven = 2.25;    
                // console.log(gradeSix * Number(courseUnits[i].value))
                let lineOneCalc = (gradeSeven * Number(courseUnits[i].value))
                 totalSum += lineOneCalc
                console.log(totalSum)
            } 
            else if(grades[i].value === 'E' || grades[i].value === 'e' ){
                let gradeEight = 2.00;    
                // console.log(gradeSix * Number(courseUnits[i].value))
                let lineOneCalc = (gradeEight * Number(courseUnits[i].value))
                 totalSum += lineOneCalc
                console.log(totalSum)
            } 
            else if(grades[i].value === 'F' || grades[i].value === '' ){
                let gradeNine = 0;    
                // console.log(gradeSix * Number(courseUnits[i].value))
                let lineOneCalc = (gradeNine * Number(courseUnits[i].value))
                 totalSum += lineOneCalc
                console.log(totalSum)
            } 
            else if(grades[i].value === ''){
                let gradeUnknown = 0;    
                // console.log(gradeUnknown * Number(courseUnits[i].value))
                let lineOneCalc = (gradeUnknown * Number(courseUnits[i].value))
                 totalSum += lineOneCalc
                console.log(totalSum)
            } 
          
        }
        overlay.style.display = 'flex';
         
         
    }
         
        
        
        // Calculating GPA logic and changing behaviour of reset and caclulate GPA button
        for (i=0; i < 20; i++) {
            totalCourseUnit += Number(courseUnits[i].value)
          function gpaCalculator(totalSum, totalCourseUnit) {  
             let finalGpaCalculator = totalSum / totalCourseUnit
             return finalGpaCalculator;
            }
        }
            gpaValue.textContent = gpaCalculator(totalSum, totalCourseUnit).toFixed(3)
             console.log(gpaCalculator(totalSum, totalCourseUnit));
             gpaAlertDisplay.textContent = gpaValue.textContent;
             btnCalcGpa.disabled = true;
             btnCalcGpa.style.opacity='0.1'
             btnReset.disabled = false;
             btnReset.style.opacity='1'
    
             console.log(Number(gpaAlertDisplay.textContent))

            //  Honor Decoder 
             if (uniFivePointZero()){
                honorDecoder(1.49, 1.50, 2.49, 2.50, 3.49, 3.50, 4.49, 4.50, 5.0)
             }

             else if (uniFourPointZero()
            ){
                honorDecoder(0.99, 1.0, 1.99, 2.00, 2.99, 3.00, 3.49, 3.50, 4.00)
            }
            else if (polyPointFour()){
                honorDecoder(1.88, 2.0, 2.49, 2.5, 2.99, 3.00, 3.49, 3.5, 4.0)
            }

        })
    

        // button reset on click
        btnReset.addEventListener('click', function(event){

        event.preventDefault()
        totalSum = 0
        gpaValue.textContent = 0
        totalCourseUnit = 0;
        btnCalcGpa.disabled = false;
        btnCalcGpa.style.opacity='1'
        btnReset.disabled = true;
        btnReset.style.opacity='0.1'
        errorLog.style.display = 'none'
        })
      
        // Modal Close for popups
        svgClose.addEventListener('click', function(){
            overlay.style.display = 'none'
        })

        svgCloseInfoGuide.addEventListener('click', function(){
            overlayContainerGuides.style.display = 'none'
        })

        btnGpaCalcInfo.addEventListener('click', function(e){
            e.preventDefault()
           overlayContainerGuides.style.display = 'flex'
        })

        //Open Mobile Menu
        svgMenuOpen.addEventListener('click', function(e){
            e.preventDefault()
            mobileMenuSection.style.display = 'block'
        })
        svgMenuClose.addEventListener('click', function(e){
            e.preventDefault()
            mobileMenuSection.style.display = 'none'
        })
                
