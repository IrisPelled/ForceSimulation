class PhysicsSimulation {
    constructor() {
        this.currentScenario = 1;
        this.scenarios = {
            1: {
                name: "גוף על משטח - שאלה 1",
                centerMass: { x: 400, y: 210 },
                givenForces: [
                    { name: "W", value: "50N", direction: "down", color: "#ff0000" },
                    { name: "F", value: "30N", direction: "down", color: "#880cff" }
                ],
                forceOptions: [
                    { name: "N", value: "60N", direction: "up", color: "#00f0e2", isCorrect: false },
                    { name: "N", value: "70N", direction: "up", color: "#d5a400", isCorrect: false },
                    { name: "N", value: "80N", direction: "up", color: "#880cff", isCorrect: true },
                    { name: "N", value: "90N", direction: "up", color: "#ff0000", isCorrect: false }
                ],
                correctAnswer: ["N"],
                correctValue: "80N",
                description: "W=50N + F=30N = 80N מטה ← צריך N=80N מעלה"
            },
            2: {
                name: "גוף על משטח - שאלה 2", 
                centerMass: { x: 400, y: 210 },
                givenForces: [
                    { name: "W", value: "60N", direction: "down", color: "#ff0000" },
                    { name: "F", value: "20N", direction: "up", color: "#880cff" }
                ],
                forceOptions: [
                    { name: "N", value: "40N", direction: "up", color: "#00f0e2", isCorrect: true },
                    { name: "N", value: "80N", direction: "up", color: "#880cff", isCorrect: false },
                    { name: "N", value: "100N", direction: "up", color: "#d5a400", isCorrect: false },
                    { name: "N", value: "10N", direction: "up", color: "#ff0000", isCorrect: false }
                ],
                correctAnswer: ["N"],
                correctValue: "40N",
                description: "W=60N מטה - F=20N מעלה = 40N מטה ← צריך N=40N מעלה"
            },
            3: {
                name: "גוף על משטח - שאלה 3",
                centerMass: { x: 400, y: 210 },
                givenForces: [
                    { name: "W", value: "50N", direction: 270, color: "#ff0000" },
                    { name: "F1", value: "52N", direction: 180, color: "#880cff" },
                    { name: "F2", value: "60N", direction: 30, color: "#00f0e2" }
                ],
                forceOptions: [
                    { name: "N", value: "20N", direction: "up", color: "#d5a400", isCorrect: true },
                    { name: "N", value: "50N", direction: "up", color: "#ff0000", isCorrect: false },
                    { name: "N", value: "52N", direction: "up", color: "#880cff", isCorrect: false },
                    { name: "N", value: "60N", direction: "up", color: "#00f0e2", isCorrect: false }
                ],
                correctAnswer: ["N"],
                correctValue: "20N",
                description: "כוחות W=50N מטה + F1=52N שמאלה + F2=60N בזווית 30° ← צריך N=20N מעלה"
            },
            4: {
                name: "גוף על משטח - שאלה 4",
                centerMass: { x: 400, y: 210 },
                givenForces: [
                    { name: "W", value: "70N", direction: "down", color: "#ff0000" },
                    { name: "F", value: "40N", direction: 330, color: "#880cff" }
                ],
                forceOptions: [
                    { name: "N", value: "20N", direction: "up", color: "#d5a400", isCorrect: false },
                    { name: "N", value: "70N", direction: "up", color: "#00f0e2", isCorrect: false },
                    { name: "N", value: "80N", direction: "up", color: "#880cff", isCorrect: false },
                    { name: "N", value: "90N", direction: "up", color: "#ff0000", isCorrect: true }
                ],
                correctAnswer: ["N"],
                correctValue: "90N",
                description: "W=70N מטה + F=40N בזווית -30° ← צריך N=90N מעלה"
            },
            5: {
                name: "גוף תלוי - שאלה 1",
                centerMass: { x: 400, y: 210 },
                givenForces: [
                    { name: "W", value: "30N", direction: "down", color: "#ff0000" },
                    { name: "F", value: "10N", direction: "down", color: "#880cff" }
                ],
                forceOptions: [
                    { name: "T", value: "40N", direction: "up", color: "#d5a400", isCorrect: true },
                    { name: "T", value: "30N", direction: "up", color: "#00f0e2", isCorrect: false },
                    { name: "T", value: "20N", direction: "up", color: "#880cff", isCorrect: false },
                    { name: "T", value: "10N", direction: "up", color: "#ff0000", isCorrect: false }
                ],
                correctAnswer: ["T"],
                correctValue: "40N",
                description: "W=30N מטה + F=10N מטה = 40N מטה ← צריך T=40N מעלה"
            },
            6: {
                name: "גוף תלוי - שאלה 2",
                centerMass: { x: 400, y: 210 },
                givenForces: [
                    { name: "W", value: "50N", direction: "down", color: "#ff0000" }
                ],
                forceOptions: [
                    { name: "T", value: "25N", direction: "up", color: "#d5a400", isCorrect: false },
                    { name: "T", value: "30N", direction: "up", color: "#00f0e2", isCorrect: false },
                    { name: "T", value: "50N", direction: "up", color: "#880cff", isCorrect: true },
                    { name: "T", value: "60N", direction: "up", color: "#ff0000", isCorrect: false }
                ],
                correctAnswer: ["T", "T"],
                correctValue: "50N",
                correctAngles: [30, 150], // T1 at 30°, T2 at 150°
                description: "גוף תלוי על שני חוטים - כל חוט תורם מתיחות של 50N בכיוון החוט"
            },
            7: {
                name: "גוף תלוי - שאלה 3",
                centerMass: { x: 400, y: 210 },
                givenForces: [
                    { name: "W", value: "30N", direction: "down", color: "#ff0000" }
                ],
                forceOptions: [
                    { name: "T", value: "30N", direction: "up", color: "#d5a400", isCorrect: false },
                    { name: "T", value: "37.5N", direction: "up", color: "#00f0e2", isCorrect: false },
                    { name: "T", value: "50N", direction: "up", color: "#880cff", isCorrect: true },
                    { name: "T", value: "60N", direction: "up", color: "#ff0000", isCorrect: false }
                ],
                correctAnswer: ["T"],
                correctValue: "50N",
                correctAngle: 36.86, // T at 36.86°
                description: "גוף תלוי עם חוט אנכי וחוט אופקי - מתיחות בחוט הנטוי 50N בזווית 36.86°"
            },
            8: {
                name: "גוף תלוי - שאלה 4",
                centerMass: { x: 400, y: 210 },
                givenForces: [
                    { name: "W", value: "50N", direction: "down", color: "#ff0000" },
                    { name: "T2", value: "60N", direction: 210, color: "#880cff" }
                ],
                forceOptions: [
                    { name: "T1", value: "70N", direction: "up", color: "#d5a400", isCorrect: false },
                    { name: "T1", value: "80N", direction: "up", color: "#00f0e2", isCorrect: false },
                    { name: "T1", value: "90N", direction: "up", color: "#ff0000", isCorrect: false },
                    { name: "T1", value: "100N", direction: "up", color: "#880cff", isCorrect: true }
                ],
                correctAnswer: ["T1"],
                correctValue: "100N",
                correctAngle: 53.2, // T1 at 53.2°
                description: "גוף תלוי עם שני חוטים נטויים - T1=100N בזווית 53.2° ו-T2=60N בזווית 210°"
            },
            9: {
                name: "תרגול משולב - שאלה 1",
                centerMass: { x: 400, y: 180 },
                givenForces: [
                    { name: "W", value: "100N", direction: "down", color: "#ff0000" },
                    { name: "T", value: "80N", direction: "left", color: "#880cff" },
                    { name: "F", value: "100N", direction: 36.86, color: "#00f0e2" }
                ],
                forceOptions: [
                    { name: "N", value: "30N", direction: "up", color: "#d5a400", isCorrect: false },
                    { name: "N", value: "40N", direction: "up", color: "#00f0e2", isCorrect: true },
                    { name: "N", value: "50N", direction: "up", color: "#880cff", isCorrect: false },
                    { name: "N", value: "60N", direction: "up", color: "#ff0000", isCorrect: false }
                ],
                correctAnswer: ["N"],
                correctValue: "40N",
                description: "גוף על משטח עם חוט אופקי - W=100N, T=80N, F=100N בזווית 36.86°, נדרש N=40N"
            },
            10: {
                name: "תרגול משולב - שאלה 2",
                centerMass: { x: 400, y: 180 },
                givenForces: [
                    { name: "W", value: "100N", direction: "down", color: "#ff0000" },
                    { name: "F", value: "48N", direction: "right", color: "#00f0e2" },
                    { name: "T", value: "T", direction: 143.14, color: "#880cff" }
                ],
                forceOptions: [
                    { name: "N", value: "55N", direction: "up", color: "#d5a400", isCorrect: false },
                    { name: "N", value: "60N", direction: "up", color: "#00f0e2", isCorrect: false },
                    { name: "N", value: "64N", direction: "up", color: "#880cff", isCorrect: true },
                    { name: "N", value: "72N", direction: "up", color: "#ff0000", isCorrect: false }
                ],
                correctAnswer: ["N"],
                correctValue: "64N",
                description: "גוף על משטח עם חוט נטוי וכוח אופקי - W=100N, F=48N ימינה, T בזווית 143.14°, נדרש N=64N"
            }
        };
        
        this.placedForces = [];
        this.isDragging = false;
        this.draggedElement = null;
        this.rotationAngle = 90;
        this.selectedForceVector = null; // For post-placement rotation
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.createArrowMarkers();
        this.loadScenario(this.currentScenario);
    }
    
    setupEventListeners() {
        // Main tab buttons
        document.getElementById('tab-surface').addEventListener('click', () => this.switchMainTab('surface'));
        document.getElementById('tab-hanging').addEventListener('click', () => this.switchMainTab('hanging'));
        document.getElementById('tab-mixed').addEventListener('click', () => this.switchMainTab('mixed'));

        // Scenario buttons
        document.getElementById('scenario1').addEventListener('click', () => this.switchScenario(1));
        document.getElementById('scenario2').addEventListener('click', () => this.switchScenario(2));
        document.getElementById('scenario3').addEventListener('click', () => this.switchScenario(3));
        document.getElementById('scenario4').addEventListener('click', () => this.switchScenario(4));
        
        // Hanging scenario buttons
        document.getElementById('hanging1').addEventListener('click', () => this.switchScenario(5));
        document.getElementById('hanging2').addEventListener('click', () => this.switchScenario(6));
        document.getElementById('hanging3').addEventListener('click', () => this.switchScenario(7));
        document.getElementById('hanging4').addEventListener('click', () => this.switchScenario(8));
        
        // Mixed scenario buttons
        document.getElementById('mixed1').addEventListener('click', () => this.switchScenario(9));
        document.getElementById('mixed2').addEventListener('click', () => this.switchScenario(10));

        // Control buttons
        document.getElementById('check-answer').addEventListener('click', () => this.checkAnswer());
        document.getElementById('reset').addEventListener('click', () => this.resetSimulation());
        
        // SVG event listeners
        const svg = document.getElementById('simulation-canvas');
        svg.addEventListener('mousemove', (e) => this.handleMouseMove(e));
        svg.addEventListener('mouseup', () => this.handleMouseUp());
        svg.addEventListener('wheel', (e) => this.handleWheel(e));
        svg.addEventListener('click', () => {
            document.focus();
            console.log('SVG clicked - focusing document');
        });

        // Rotation controls - need to focus on document for keydown to work
        document.addEventListener('keydown', (e) => this.handleKeyDown(e));
        document.addEventListener('keyup', (e) => this.handleKeyUp(e));
        
        // Make sure document can receive focus for keyboard events
        document.tabIndex = -1;
        
        // Force focus on document
        setTimeout(() => {
            document.focus();
            console.log('Document focused for keyboard events');
        }, 100);

        // Test keyboard events
        console.log('Event listeners set up');
        document.addEventListener('click', () => {
            console.log('Document clicked - focusing');
            document.focus();
        });
    }
    
    handleKeyDown(event) {
        console.log('Key pressed:', event.key); // Debug
        
        if (event.key === 'r' || event.key === 'R') {
            event.preventDefault();
            
            if (this.isDragging && this.ghostVector) {
                // Rotating while dragging - clockwise
                this.rotationAngle = (this.rotationAngle + 1) % 360;
                this.updateGhostVectorRotation();
                this.showFeedback(`סיבוב עם כיוון השעון: ${this.rotationAngle}°`, 'success');
            } else if (this.selectedForceVector) {
                // Rotating placed force - clockwise
                this.rotateSelectedForce(1);
            } else {
                // No force selected - show instructions
                this.showFeedback('בחר כוח מוצב או גרור כוח חדש כדי לסובב', 'error');
            }
        } else if (event.key === 'l' || event.key === 'L') {
            event.preventDefault();
            
            if (this.isDragging && this.ghostVector) {
                // Rotating while dragging - counter-clockwise
                this.rotationAngle = (this.rotationAngle - 1 + 360) % 360;
                this.updateGhostVectorRotation();
                this.showFeedback(`סיבוב נגד כיוון השעון: ${this.rotationAngle}°`, 'success');
            } else if (this.selectedForceVector) {
                // Rotating placed force - counter-clockwise
                this.rotateSelectedForce(-1);
            } else {
                // No force selected - show instructions
                this.showFeedback('בחר כוח מוצב או גרור כוח חדש כדי לסובב', 'error');
            }
        }
    }
    
    handleKeyUp(event) {
        // Clear rotation feedback after key release
        if (event.key === 'r' || event.key === 'R') {
            setTimeout(() => {
                if (!this.isDragging) {
                    const feedbackElement = document.getElementById('feedback-message');
                    if (feedbackElement.textContent.includes('סיבוב:')) {
                        feedbackElement.textContent = '';
                        feedbackElement.className = '';
                    }
                }
            }, 1000);
        }
    }
    
    rotateSelectedForce(direction = 1) {
        if (!this.selectedForceVector) return;
        
        const forceData = this.selectedForceVector.forceData;
        forceData.rotation = (forceData.rotation + direction + 360) % 360;
        
        // Update the vector display
        this.updatePlacedForceVector(this.selectedForceVector, forceData);
        
        const directionText = direction > 0 ? 'עם כיוון השעון' : 'נגד כיוון השעון';
        this.showFeedback(`סיבוב כוח מוצב ${directionText}: ${forceData.rotation}°`, 'success');
        
        // Update angle display
        this.updateAngleDisplay(forceData.rotation);
    }
    
    updatePlacedForceVector(vectorElement, forceData) {
        const centerMass = this.scenarios[this.currentScenario].centerMass;
        const vectorLength = this.calculateVectorLength(forceData.value);
        
        // Convert physics angle to SVG coordinates for display
        let svgAngle;
        if (forceData.rotation === 0) svgAngle = 0;
        else if (forceData.rotation === 90) svgAngle = 270;
        else if (forceData.rotation === 180) svgAngle = 180;
        else if (forceData.rotation === 270) svgAngle = 90;
        else svgAngle = (360 - forceData.rotation) % 360;
        const radians = (svgAngle * Math.PI) / 180;
        
        const endPoint = {
            x: centerMass.x + vectorLength * Math.cos(radians),
            y: centerMass.y + vectorLength * Math.sin(radians)
        };
        
        const line = vectorElement.querySelector('line');
        const text = vectorElement.querySelector('text');
        
        line.setAttribute('x2', endPoint.x);
        line.setAttribute('y2', endPoint.y);
        
        // Update division marks
        const divisions = vectorElement.querySelectorAll('line:not([marker-end])');
        divisions.forEach(div => div.remove());
        
        const newDivisions = this.createVectorDivisions(centerMass, endPoint, forceData.value, forceData.color);
        newDivisions.forEach(division => vectorElement.appendChild(division));
        
        const labelPos = this.calculateLabelPosition(centerMass, endPoint);
        text.setAttribute('x', labelPos.x);
        text.setAttribute('y', labelPos.y);
    }
    
    handleWheel(event) {
        if (this.isDragging && this.ghostVector) {
            event.preventDefault();
            const delta = event.deltaY > 0 ? 45 : -45;
            this.rotationAngle = (this.rotationAngle + delta + 360) % 360;
            this.updateGhostVectorRotation();
            this.showFeedback(`סיבוב: ${this.rotationAngle}°`, 'success');
        }
    }
    
    updateGhostVectorRotation() {
        if (!this.ghostVector) return;
        
        const line = this.ghostVector.querySelector('line');
        const text = this.ghostVector.querySelector('text');
        
        const x1 = parseFloat(line.getAttribute('x1'));
        const y1 = parseFloat(line.getAttribute('y1'));
        
        const forceValue = this.draggedElement.dataset.forceValue;
        const vectorLength = this.calculateVectorLength(forceValue);
        
        // Convert physics angle to SVG coordinates for display
        let svgAngle;
        if (this.rotationAngle === 0) svgAngle = 0;
        else if (this.rotationAngle === 90) svgAngle = 270;
        else if (this.rotationAngle === 180) svgAngle = 180;
        else if (this.rotationAngle === 270) svgAngle = 90;
        else svgAngle = (360 - this.rotationAngle) % 360;
        const radians = (svgAngle * Math.PI) / 180;
        
        const endPoint = {
            x: x1 + vectorLength * Math.cos(radians),
            y: y1 + vectorLength * Math.sin(radians)
        };
        
        line.setAttribute('x2', endPoint.x);
        line.setAttribute('y2', endPoint.y);
        
        // Update division marks if they exist
        const divisions = this.ghostVector.querySelectorAll('line:not([marker-end])');
        divisions.forEach(div => div.remove());
        
        const newDivisions = this.createVectorDivisions({ x: x1, y: y1 }, endPoint, forceValue, this.draggedElement.dataset.forceColor);
        newDivisions.forEach(division => this.ghostVector.appendChild(division));
        
        const labelPos = this.calculateLabelPosition({ x: x1, y: y1 }, endPoint);
        text.setAttribute('x', labelPos.x);
        text.setAttribute('y', labelPos.y);
    }
    
    createArrowMarkers() {
        // Arrow markers are now defined in HTML, this function is no longer needed
        // but kept for compatibility
    }
    
    switchMainTab(category) {
        // Update active main tab
        document.querySelectorAll('.tab-header').forEach(btn => btn.classList.remove('active'));
        document.getElementById(`tab-${category}`).classList.add('active');
        
        // Show/hide tab panels
        document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));
        document.getElementById(`${category}-content`).classList.add('active');
        
        // Switch to appropriate scenario
        if (category === 'surface') {
            this.switchScenario(1); // Default to first surface question
        } else if (category === 'hanging') {
            this.switchScenario(5); // Default to first hanging question
        } else if (category === 'mixed') {
            this.switchScenario(9); // Default to first mixed question
        }
    }
    
    switchScenario(scenarioNum) {
        if (scenarioNum === this.currentScenario) return;
        
        this.currentScenario = scenarioNum;
        
        // Update UI
        document.querySelectorAll('.sub-tab').forEach(btn => btn.classList.remove('active'));
        
        // Handle different scenario button types
        if (scenarioNum <= 4) {
            document.getElementById(`scenario${scenarioNum}`).classList.add('active');
        } else if (scenarioNum === 5) {
            document.getElementById('hanging1').classList.add('active');
        } else if (scenarioNum === 6) {
            document.getElementById('hanging2').classList.add('active');
        } else if (scenarioNum === 7) {
            document.getElementById('hanging3').classList.add('active');
        } else if (scenarioNum === 8) {
            document.getElementById('hanging4').classList.add('active');
        } else if (scenarioNum === 9) {
            document.getElementById('mixed1').classList.add('active');
        } else if (scenarioNum === 10) {
            document.getElementById('mixed2').classList.add('active');
        }
        
        // Switch scenario elements
        document.querySelectorAll('.scenario-group').forEach(group => {
            group.style.display = 'none';
        });
        document.getElementById(`scenario${scenarioNum}-elements`).style.display = 'block';
        
        this.loadScenario(scenarioNum);
    }
    
    loadScenario(scenarioNum) {
        const scenario = this.scenarios[scenarioNum];
        
        // Clear old forces FIRST
        this.clearForceVectors();
        
        // Update drop zone position
        const dropZone = document.getElementById('drop-zone');
        dropZone.setAttribute('cx', scenario.centerMass.x);
        dropZone.setAttribute('cy', scenario.centerMass.y);
        
        // Load given forces
        this.displayGivenForces(scenario.givenForces);
        
        // Load force options
        this.displayForceOptions(scenario.forceOptions);
        
        // Scenario description removed - don't show answer to student
        
        // Reset placed forces
        this.placedForces = [];
        
        // Clear feedback
        document.getElementById('feedback-message').textContent = '';
        document.getElementById('feedback-message').className = '';
        
        // Hide angle display when switching scenarios
        this.hideAngleDisplay();
    }
    
    displayGivenForces(forces) {
        const container = document.getElementById('given-forces');
        container.innerHTML = '';
        
        forces.forEach(force => {
            const div = document.createElement('div');
            div.className = 'force-item';
            div.style.borderRight = `4px solid ${force.color}`;
            div.innerHTML = `${force.value} = ${this.addVectorArrow(force.name)} (${this.getDirectionText(force.direction)})`;
            container.appendChild(div);
        });
        
        // Draw given forces on canvas
        this.drawGivenForces(forces);
    }
    
    displayForceOptions(forces) {
        const container = document.getElementById('force-options');
        container.innerHTML = '';
        
        forces.forEach((force, index) => {
            const div = document.createElement('div');
            div.className = 'force-option';
            div.style.backgroundColor = force.color;
            div.style.borderColor = force.color;
            div.innerHTML = `${force.value} = ${this.addVectorArrow(force.name)}`;
            div.dataset.forceIndex = index;
            div.dataset.forceName = force.name;
            div.dataset.forceDirection = force.direction;
            div.dataset.forceColor = force.color;
            div.dataset.forceValue = force.value;
            
            // Add drag functionality
            div.addEventListener('mousedown', (e) => this.startDrag(e, div));
            
            container.appendChild(div);
        });
        
        // Instructions moved to problem-info section in HTML
    }
    
    // showScenarioDescription function removed - don't reveal answer to students
    
    drawGivenForces(forces) {
        const scenario = this.scenarios[this.currentScenario];
        const vectorsGroup = document.getElementById('force-vectors');
        
        // Special handling for scenario 8 (two angled ropes)
        if (this.currentScenario === 8) {
            forces.forEach((force, index) => {
                let startPoint = scenario.centerMass;
                
                // For T2, adjust the vector length to align with the left rope
                if (force.name === 'T2' && force.direction === 210) {
                    // Create custom vector that aligns with the left rope
                    const customVector = this.createCustomT2Vector(force, startPoint, `given-${index}`);
                    vectorsGroup.appendChild(customVector);
                } else {
                    const vector = this.createForceVector(force, startPoint, `given-${index}`);
                    vectorsGroup.appendChild(vector);
                }
            });
        } else if (this.currentScenario === 9) {
            // Special handling for scenario 9 (mixed - horizontal rope)
            forces.forEach((force, index) => {
                let startPoint = scenario.centerMass;
                
                // For T, position it along the horizontal rope
                if (force.name === 'T' && force.direction === 'left') {
                    // Create custom vector that aligns with the horizontal rope
                    const customVector = this.createCustomTVector(force, startPoint, `given-${index}`);
                    vectorsGroup.appendChild(customVector);
                } else {
                    const vector = this.createForceVector(force, startPoint, `given-${index}`);
                    vectorsGroup.appendChild(vector);
                }
            });
        } else if (this.currentScenario === 10) {
            // Special handling for scenario 10 (mixed - angled rope to wall)
            forces.forEach((force, index) => {
                let startPoint = scenario.centerMass;
                
                // For T, position it along the angled rope (143.14°)
                if (force.name === 'T' && force.direction === 143.14) {
                    // Create custom vector that aligns with the angled rope
                    const customVector = this.createCustomT10Vector(force, startPoint, `given-${index}`);
                    vectorsGroup.appendChild(customVector);
                } else if (force.name === 'F' && force.direction === 'right') {
                    // Position F force exactly on the dashed horizontal line
                    const adjustedStartPoint = { x: startPoint.x, y: startPoint.y };
                    const vector = this.createForceVector(force, adjustedStartPoint, `given-${index}`);
                    // Adjust label position to the right and higher
                    const labelElement = vector.querySelector('text');
                    const arrowElement = vector.querySelectorAll('text')[1]; // Second text element is the arrow
                    if (labelElement) {
                        const currentX = parseFloat(labelElement.getAttribute('x'));
                        const currentY = parseFloat(labelElement.getAttribute('y'));
                        labelElement.setAttribute('x', currentX + 30);
                        labelElement.setAttribute('y', currentY - 25); // Move up to avoid ground
                    }
                    if (arrowElement) {
                        const currentX = parseFloat(arrowElement.getAttribute('x'));
                        const currentY = parseFloat(arrowElement.getAttribute('y'));
                        arrowElement.setAttribute('x', currentX + 30);
                        arrowElement.setAttribute('y', currentY - 25); // Move up to avoid ground
                    }
                    vectorsGroup.appendChild(vector);
                } else {
                    const vector = this.createForceVector(force, startPoint, `given-${index}`);
                    vectorsGroup.appendChild(vector);
                }
            });
        } else {
            // Original logic for other scenarios
            const centerMass = scenario.centerMass;
            let currentStartPoint = { ...centerMass };
            
            forces.forEach((force, index) => {
                let startPoint;
                
                if (index === 0) {
                    startPoint = centerMass;
                } else {
                    // Check if same direction as previous force
                    const prevForce = forces[index - 1];
                    if (force.direction === prevForce.direction) {
                        // Connect head to tail for same direction forces
                        const prevVectorLength = this.calculateVectorLength(prevForce.value);
                        const prevEndPoint = this.calculateEndPoint(currentStartPoint, prevForce.direction, prevVectorLength);
                        startPoint = prevEndPoint;
                        currentStartPoint = startPoint;
                    } else {
                        // Different direction - start from center of mass
                        startPoint = centerMass;
                        currentStartPoint = startPoint;
                    }
                }
                
                const vector = this.createForceVector(force, startPoint, `given-${index}`);
                vectorsGroup.appendChild(vector);
            });
        }
    }
    
    createCustomT2Vector(force, startPoint, id) {
        // Custom vector for T2 that aligns exactly with the left rope
        // Left rope goes from (400, 210) to (200, 310)
        const endPoint = { x: 300, y: 260 }; // Midpoint along the rope for better visibility
        
        const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        group.setAttribute('id', id);
        group.setAttribute('class', 'force-vector');
        
        // Arrow line
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', startPoint.x);
        line.setAttribute('x2', endPoint.x);
        line.setAttribute('y1', startPoint.y);
        line.setAttribute('y2', endPoint.y);
        line.setAttribute('stroke', force.color);
        line.setAttribute('stroke-width', '3');
        line.setAttribute('marker-end', `url(#arrowhead-${force.color.slice(1)})`);
        
        // Label - main text
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        const labelPos = this.calculateLabelPosition(startPoint, endPoint);
        text.setAttribute('x', labelPos.x);
        text.setAttribute('y', labelPos.y);
        const textColor = force.color === '#00f0e2' ? '#000000' : force.color;
        text.setAttribute('fill', textColor);
        text.setAttribute('font-size', '14');
        text.setAttribute('font-weight', 'bold');
        text.setAttribute('text-anchor', 'middle');
        text.innerHTML = `<tspan>${force.name}<tspan dx="2" dy="0">=</tspan></tspan><tspan>${force.value}</tspan>`;
        
        // Arrow above the letter
        const arrow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        arrow.setAttribute('x', labelPos.x - 20);
        arrow.setAttribute('y', labelPos.y - 12);
        arrow.setAttribute('fill', textColor);
        arrow.setAttribute('font-size', '10');
        arrow.setAttribute('font-weight', 'bold');
        arrow.setAttribute('text-anchor', 'middle');
        arrow.textContent = '→';
        
        group.appendChild(line);
        group.appendChild(text);
        group.appendChild(arrow);
        
        return group;
    }

    createCustomTVector(force, startPoint, id) {
        // Custom vector for T that aligns exactly with the horizontal rope
        // Horizontal rope goes from (400, 180) to (150, 180)
        const endPoint = { x: 275, y: 180 }; // Midpoint along the horizontal rope
        
        const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        group.setAttribute('id', id);
        group.setAttribute('class', 'force-vector');
        
        // Arrow line
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', startPoint.x);
        line.setAttribute('x2', endPoint.x);
        line.setAttribute('y1', startPoint.y);
        line.setAttribute('y2', endPoint.y);
        line.setAttribute('stroke', force.color);
        line.setAttribute('stroke-width', '3');
        line.setAttribute('marker-end', `url(#arrowhead-${force.color.slice(1)})`);
        
        // Label - main text
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        const labelPos = this.calculateLabelPosition(startPoint, endPoint);
        text.setAttribute('x', labelPos.x);
        text.setAttribute('y', labelPos.y);
        const textColor = force.color === '#00f0e2' ? '#000000' : force.color;
        text.setAttribute('fill', textColor);
        text.setAttribute('font-size', '14');
        text.setAttribute('font-weight', 'bold');
        text.setAttribute('text-anchor', 'middle');
        text.innerHTML = `<tspan>${force.name}<tspan dx="2" dy="0">=</tspan></tspan><tspan>${force.value}</tspan>`;
        
        // Arrow above the letter
        const arrow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        arrow.setAttribute('x', labelPos.x - 20);
        arrow.setAttribute('y', labelPos.y - 12);
        arrow.setAttribute('fill', textColor);
        arrow.setAttribute('font-size', '10');
        arrow.setAttribute('font-weight', 'bold');
        arrow.setAttribute('text-anchor', 'middle');
        arrow.textContent = '→';
        
        group.appendChild(line);
        group.appendChild(text);
        group.appendChild(arrow);
        
        return group;
    }

    createCustomT10Vector(force, startPoint, id) {
        // Custom vector for T that aligns exactly with the angled rope
        // Rope goes from (400, 180) to (150, 90) - calculate midpoint for vector placement
        const ropeStart = { x: 400, y: 180 };
        const ropeEnd = { x: 150, y: 90 };
        const vectorLength = 100; // Further increased length of the T vector arrow for better visibility
        
        // Calculate direction vector of the rope
        const dx = ropeEnd.x - ropeStart.x;
        const dy = ropeEnd.y - ropeStart.y;
        const ropeLength = Math.sqrt(dx * dx + dy * dy);
        
        // Normalize direction
        const unitX = dx / ropeLength;
        const unitY = dy / ropeLength;
        
        // Position vector starting from center of mass along the rope direction
        const vectorEnd = {
            x: startPoint.x + unitX * vectorLength,
            y: startPoint.y + unitY * vectorLength
        };
        
        const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        group.setAttribute('id', id);
        group.setAttribute('class', 'force-vector');
        
        // Arrow line - exactly along the rope, thicker for better visibility
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', startPoint.x);
        line.setAttribute('x2', vectorEnd.x);
        line.setAttribute('y1', startPoint.y);
        line.setAttribute('y2', vectorEnd.y);
        line.setAttribute('stroke', force.color);
        line.setAttribute('stroke-width', '4'); // Increased thickness
        line.setAttribute('marker-end', `url(#arrowhead-${force.color.slice(1)})`);
        
        // Label position - near the arrowhead tip
        const labelX = vectorEnd.x;
        const labelY = vectorEnd.y;
        
        // Main text - just "T", larger font, positioned above arrowhead
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', labelX);
        text.setAttribute('y', labelY - 5); // Position above the arrowhead
        const textColor = force.color === '#00f0e2' ? '#000000' : force.color;
        text.setAttribute('fill', textColor);
        text.setAttribute('font-size', '16'); // Increased font size
        text.setAttribute('font-weight', 'bold');
        text.setAttribute('text-anchor', 'middle');
        text.textContent = 'T';
        
        // Arrow above the letter, larger
        const arrow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        arrow.setAttribute('x', labelX);
        arrow.setAttribute('y', labelY - 19); // Position above the T letter
        arrow.setAttribute('fill', textColor);
        arrow.setAttribute('font-size', '12'); // Increased arrow size
        arrow.setAttribute('font-weight', 'bold');
        arrow.setAttribute('text-anchor', 'middle');
        arrow.textContent = '→';
        
        group.appendChild(line);
        group.appendChild(text);
        group.appendChild(arrow);
        
        return group;
    }

    createForceVector(force, startPoint, id) {
        const vectorLength = this.calculateVectorLength(force.value);
        const endPoint = this.calculateEndPoint(startPoint, force.direction, vectorLength);
        
        const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        group.setAttribute('id', id);
        group.setAttribute('class', 'force-vector');
        
        // Arrow line
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', startPoint.x);
        line.setAttribute('x2', endPoint.x);
        line.setAttribute('y1', startPoint.y);
        line.setAttribute('y2', endPoint.y);
        line.setAttribute('stroke', force.color);
        line.setAttribute('stroke-width', '3');
        line.setAttribute('marker-end', `url(#arrowhead-${force.color.slice(1)})`);
        
        // Add division marks
        const divisions = this.createVectorDivisions(startPoint, endPoint, force.value, force.color);
        divisions.forEach(division => group.appendChild(division));
        
        // Label - main text
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        const labelPos = this.calculateLabelPosition(startPoint, endPoint);
        text.setAttribute('x', labelPos.x);
        text.setAttribute('y', labelPos.y);
        // Use black text for turquoise vectors for better readability
        const textColor = force.color === '#00f0e2' ? '#000000' : force.color;
        text.setAttribute('fill', textColor);
        text.setAttribute('font-size', '14');
        text.setAttribute('font-weight', 'bold');
        text.setAttribute('text-anchor', 'middle');
        text.innerHTML = `<tspan>${force.name}<tspan dx="2" dy="0">=</tspan></tspan><tspan>${force.value}</tspan>`;
        
        // Arrow above the letter
        const arrow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        arrow.setAttribute('x', labelPos.x - 20); // Position above the letter
        arrow.setAttribute('y', labelPos.y - 12); // Above the main text
        arrow.setAttribute('fill', textColor);
        arrow.setAttribute('font-size', '10');
        arrow.setAttribute('font-weight', 'bold');
        arrow.setAttribute('text-anchor', 'middle');
        arrow.textContent = '→';
        
        group.appendChild(line);
        group.appendChild(text);
        group.appendChild(arrow);
        
        return group;
    }
    
    calculateEndPoint(startPoint, direction, length) {
        // If direction is a string, convert to physics angle
        if (typeof direction === 'string') {
            const directions = {
                'right': 0,
                'up': 90,
                'left': 180,
                'down': 270
            };
            direction = directions[direction] || 0;
        }
        
        // Convert physics angle to SVG coordinates
        // Physics: 0° = right, 90° = up, 180° = left, 270° = down
        // SVG: 0° = right, 90° = down, 180° = left, 270° = up
        // Simple mapping: physics_down(270°) -> svg_down(90°), physics_up(90°) -> svg_up(270°)
        let svgAngle;
        if (direction === 0) svgAngle = 0;      // right -> right
        else if (direction === 90) svgAngle = 270;   // up -> up
        else if (direction === 180) svgAngle = 180;  // left -> left
        else if (direction === 270) svgAngle = 90;   // down -> down
        else svgAngle = (360 - direction) % 360;     // fallback for other angles
        const radians = (svgAngle * Math.PI) / 180;
        
        return {
            x: startPoint.x + Math.cos(radians) * length,
            y: startPoint.y + Math.sin(radians) * length
        };
    }
    
    calculateLabelPosition(startPoint, endPoint) {
        // Calculate vector direction
        const dx = endPoint.x - startPoint.x;
        const dy = endPoint.y - startPoint.y;
        const length = Math.sqrt(dx * dx + dy * dy);
        
        // Normalize direction vector
        const unitX = dx / length;
        const unitY = dy / length;
        
        // Calculate perpendicular vector (rotate 90 degrees)
        const perpX = -unitY;
        const perpY = unitX;
        
        // Position label at the end of the vector, offset perpendicularly
        const offsetDistance = 35;
        
        return { 
            x: endPoint.x + perpX * offsetDistance, 
            y: endPoint.y + perpY * offsetDistance 
        };
    }
    
    startDrag(event, element) {
        event.preventDefault();
        this.isDragging = true;
        this.draggedElement = element;
        this.rotationAngle = 90; // Start pointing up
        element.classList.add('dragging');
        
        // Show drop zone
        const dropZone = document.getElementById('drop-zone');
        dropZone.classList.add('active');
        
        // Create ghost element
        this.createGhostVector(element);
        
        // Show drag hint
        this.showFeedback('גרור למרכז המסה', 'success');
        
        // Focus document to ensure keyboard events work
        document.focus();
    }
    
    createGhostVector(element) {
        const force = {
            name: element.dataset.forceName,
            direction: element.dataset.forceDirection,
            color: element.dataset.forceColor,
            value: element.dataset.forceValue
        };
        
        this.ghostVector = this.createForceVector(force, { x: 0, y: 0 }, 'ghost-vector');
        this.ghostVector.style.opacity = '0.7';
        this.ghostVector.style.pointerEvents = 'none';
        
        document.getElementById('force-vectors').appendChild(this.ghostVector);
    }
    
    handleMouseMove(event) {
        if (!this.isDragging || !this.ghostVector) return;
        
        const svg = document.getElementById('simulation-canvas');
        const rect = svg.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        
        // Update ghost vector position
        const line = this.ghostVector.querySelector('line');
        const text = this.ghostVector.querySelector('text');
        
        const forceValue = this.draggedElement.dataset.forceValue;
        const vectorLength = this.calculateVectorLength(forceValue);
        const radians = (this.rotationAngle * Math.PI) / 180;
        
        // Convert physics angle to SVG coordinates for display
        let svgAngle;
        if (this.rotationAngle === 0) svgAngle = 0;
        else if (this.rotationAngle === 90) svgAngle = 270;
        else if (this.rotationAngle === 180) svgAngle = 180;
        else if (this.rotationAngle === 270) svgAngle = 90;
        else svgAngle = (360 - this.rotationAngle) % 360;
        const svgRadians = (svgAngle * Math.PI) / 180;
        
        const endPoint = {
            x: x + vectorLength * Math.cos(svgRadians),
            y: y + vectorLength * Math.sin(svgRadians)
        };
        
        line.setAttribute('x1', x);
        line.setAttribute('y1', y);
        line.setAttribute('x2', endPoint.x);
        line.setAttribute('y2', endPoint.y);
        
        // Update division marks
        const divisions = this.ghostVector.querySelectorAll('line:not([marker-end])');
        divisions.forEach(div => div.remove());
        
        const newDivisions = this.createVectorDivisions({ x, y }, endPoint, forceValue, this.draggedElement.dataset.forceColor);
        newDivisions.forEach(division => this.ghostVector.appendChild(division));
        
        const labelPos = this.calculateLabelPosition({ x, y }, endPoint);
        text.setAttribute('x', labelPos.x);
        text.setAttribute('y', labelPos.y);
        
        // Update angle display during drag
        this.updateAngleDisplay(this.rotationAngle);
    }
    
    handleMouseUp() {
        if (!this.isDragging) return;
        
        const dropZone = document.getElementById('drop-zone');
        const centerMass = this.scenarios[this.currentScenario].centerMass;
        
        // Check if dropped near center of mass
        if (this.ghostVector) {
            const line = this.ghostVector.querySelector('line');
            const x1 = parseFloat(line.getAttribute('x1'));
            const y1 = parseFloat(line.getAttribute('y1'));
            
            const distance = Math.sqrt(Math.pow(x1 - centerMass.x, 2) + Math.pow(y1 - centerMass.y, 2));
            
            if (distance < 40) { // Increased tolerance
                // Valid drop
                this.placeForce();
            } else {
                // Invalid drop
                this.showFeedback('יש לחבר את זנב הכוח למרכז המסה!', 'error');
            }
            
            // Clean up ghost vector
            this.ghostVector.remove();
            this.ghostVector = null;
        }
        
        // Clean up
        if (this.draggedElement) {
            this.draggedElement.classList.remove('dragging');
            this.draggedElement = null;
        }
        
        dropZone.classList.remove('active');
        this.isDragging = false;
        this.rotationAngle = 90;
        
        // Hide angle display when not dragging
        if (!this.selectedForceVector) {
            this.hideAngleDisplay();
        }
    }
    
    placeForce() {
        const force = {
            name: this.draggedElement.dataset.forceName,
            direction: this.draggedElement.dataset.forceDirection,
            color: this.draggedElement.dataset.forceColor,
            value: this.draggedElement.dataset.forceValue,
            rotation: this.rotationAngle
        };
        
        const scenario = this.scenarios[this.currentScenario];
        
        // For two-force scenarios, allow placing the same force type twice
        if (scenario.correctAngles && scenario.correctAnswer.length === 2) {
            // Check if we already have 2 forces of this type
            const sameNameForces = this.placedForces.filter(f => f.name === force.name);
            if (sameNameForces.length >= 2) {
                this.showFeedback('ניתן להציב רק שני כוחות מאותו סוג!', 'error');
                return;
            }
        } else {
            // Single-force scenario - original logic
            if (this.placedForces.some(f => f.name === force.name)) {
                this.showFeedback('כוח זה כבר הוצב!', 'error');
                return;
            }
        }
        
        this.placedForces.push(force);
        
        // Create permanent vector with current rotation
        const centerMass = this.scenarios[this.currentScenario].centerMass;
        const vector = this.createRotatedForceVector(force, centerMass, `placed-${this.placedForces.length}`);
        vector.classList.add('placed');
        
        // Store force data in the vector element for later rotation
        vector.forceData = force;
        
        // Add click handler for selection
        vector.addEventListener('click', () => this.selectForceVector(vector));
        vector.style.cursor = 'pointer';
        
        document.getElementById('force-vectors').appendChild(vector);
        
        // Auto-select the placed force for immediate rotation
        this.selectForceVector(vector);
        
        // For two-force scenarios, don't hide the option until 2 forces are placed
        if (scenario.correctAngles && scenario.correctAnswer.length === 2) {
            const sameNameForces = this.placedForces.filter(f => f.name === force.name);
            if (sameNameForces.length >= 2) {
                this.draggedElement.style.display = 'none';
            }
        } else {
            // Single-force scenario - hide after first placement
            this.draggedElement.style.display = 'none';
        }
        
        // Show angle display for placed force
        this.updateAngleDisplay(force.rotation);
        
        this.showFeedback(`כוח הוצב! זווית נוכחית: ${force.rotation}°`, 'success');
    }
    
    createRotatedForceVector(force, startPoint, id) {
        const vectorLength = this.calculateVectorLength(force.value);
        
        // Convert physics angle to SVG coordinates for display
        let svgAngle;
        if (force.rotation === 0) svgAngle = 0;
        else if (force.rotation === 90) svgAngle = 270;
        else if (force.rotation === 180) svgAngle = 180;
        else if (force.rotation === 270) svgAngle = 90;
        else svgAngle = (360 - force.rotation) % 360;
        const radians = (svgAngle * Math.PI) / 180;
        
        const endPoint = {
            x: startPoint.x + vectorLength * Math.cos(radians),
            y: startPoint.y + vectorLength * Math.sin(radians)
        };
        
        const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        group.setAttribute('id', id);
        group.setAttribute('class', 'force-vector');
        
        // Arrow line
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', startPoint.x);
        line.setAttribute('x2', endPoint.x);
        line.setAttribute('y1', startPoint.y);
        line.setAttribute('y2', endPoint.y);
        line.setAttribute('stroke', force.color);
        line.setAttribute('stroke-width', '3');
        line.setAttribute('marker-end', `url(#arrowhead-${force.color.slice(1)})`);
        
        // Add division marks
        const divisions = this.createVectorDivisions(startPoint, endPoint, force.value, force.color);
        divisions.forEach(division => group.appendChild(division));
        
        // Label - main text
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        const labelPos = this.calculateLabelPosition(startPoint, endPoint);
        text.setAttribute('x', labelPos.x);
        text.setAttribute('y', labelPos.y);
        // Use black text for turquoise vectors for better readability
        const textColor = force.color === '#00f0e2' ? '#000000' : force.color;
        text.setAttribute('fill', textColor);
        text.setAttribute('font-size', '14');
        text.setAttribute('font-weight', 'bold');
        text.setAttribute('text-anchor', 'middle');
        text.innerHTML = `<tspan>${force.name}<tspan dx="2" dy="0">=</tspan></tspan><tspan>${force.value}</tspan>`;
        
        // Arrow above the letter
        const arrow = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        arrow.setAttribute('x', labelPos.x - 20); // Position above the letter
        arrow.setAttribute('y', labelPos.y - 12); // Above the main text
        arrow.setAttribute('fill', textColor);
        arrow.setAttribute('font-size', '10');
        arrow.setAttribute('font-weight', 'bold');
        arrow.setAttribute('text-anchor', 'middle');
        arrow.textContent = '→';
        
        group.appendChild(line);
        group.appendChild(text);
        group.appendChild(arrow);
        
        return group;
    }
    
    selectForceVector(vectorElement) {
        // Remove selection from previous vector
        if (this.selectedForceVector) {
            this.selectedForceVector.classList.remove('selected');
        }
        
        // Select new vector
        this.selectedForceVector = vectorElement;
        vectorElement.classList.add('selected');
        
        // Show angle display for selected force
        this.updateAngleDisplay(vectorElement.forceData.rotation);
        
        this.showFeedback(`כוח נבחר (${vectorElement.forceData.rotation}°) - R/L לסיבוב`, 'success');
    }
    
    checkAnswer() {
        const scenario = this.scenarios[this.currentScenario];
        const correctValue = scenario.correctValue;
        
        // Check if this is a two-force scenario (hanging ropes)
        if (scenario.correctAngles && scenario.correctAnswer.length === 2) {
            // Two-force scenario (e.g., hanging with two ropes)
            const correctAngles = scenario.correctAngles;
            
            if (this.placedForces.length !== 2) {
                this.showFeedback('לחצו על איפוס ונסו שוב!', 'error');
                return;
            }
            
            // Check if both forces have correct value
            const correctValueForces = this.placedForces.filter(f => f.value === correctValue);
            if (correctValueForces.length !== 2) {
                this.showFeedback('לחצו על איפוס ונסו שוב!', 'error');
                return;
            }
            
            // Check if forces are at correct angles
            const angle1Present = this.placedForces.some(f => 
                f.value === correctValue && this.isAngleCorrect(f.rotation, correctAngles[0])
            );
            const angle2Present = this.placedForces.some(f => 
                f.value === correctValue && this.isAngleCorrect(f.rotation, correctAngles[1])
            );
            
            if (angle1Present && angle2Present) {
                this.showFeedback(`מצוין! פתרת נכון את הבעיה. ${scenario.description}`, 'success');
            } else {
                this.showFeedback('לחצו על איפוס ונסו שוב!', 'error');
            }
        } else if (scenario.correctAngle !== undefined) {
            // Single-force with specific angle scenario (e.g., angled rope)
            const correctAngle = scenario.correctAngle;
            
            if (this.placedForces.length !== 1) {
                this.showFeedback('לחצו על איפוס ונסו שוב!', 'error');
                return;
            }
            
            const placedForce = this.placedForces[0];
            
            if (placedForce.value !== correctValue) {
                this.showFeedback('לחצו על איפוס ונסו שוב!', 'error');
                return;
            }
            
            if (this.isAngleCorrect(placedForce.rotation, correctAngle)) {
                this.showFeedback(`מצוין! פתרת נכון את הבעיה. ${scenario.description}`, 'success');
            } else {
                this.showFeedback('לחצו על איפוס ונסו שוב!', 'error');
            }
        } else {
            // Single-force scenario pointing up (original logic)
            const correctForce = this.placedForces.find(f => 
                f.value === correctValue && 
                this.isPointingUp(f.rotation)
            );
            
            if (correctForce && this.placedForces.length === 1) {
                this.showFeedback(`מצוין! פתרת נכון את הבעיה. ${scenario.description}`, 'success');
            } else if (this.placedForces.length === 0) {
                this.showFeedback('לא בחרת כוח. גרור כוח למרכז המסה ותכוון אותו כלפי מעלה.', 'error');
            } else {
                this.showFeedback('לחצו על איפוס ונסו שוב!', 'error');
            }
        }
    }
    
    isAngleCorrect(actualAngle, targetAngle) {
        // Check if angle is within 5 degrees tolerance
        const normalizedActual = ((actualAngle % 360) + 360) % 360;
        const normalizedTarget = ((targetAngle % 360) + 360) % 360;
        
        const diff = Math.abs(normalizedActual - normalizedTarget);
        return diff <= 5 || diff >= 355; // Handle wraparound at 0°/360°
    }
    
    isPointingUp(rotation) {
        // Check if the rotation is pointing up (90 degrees ± 5 degrees tolerance)
        // In physics coordinates: 0° = right, 90° = up, 180° = left, 270° = down
        const normalizedRotation = ((rotation % 360) + 360) % 360;
        return (normalizedRotation >= 85 && normalizedRotation <= 95);
    }
    
    resetSimulation() {
        this.placedForces = [];
        this.selectedForceVector = null;
        this.clearForceVectors();
        this.loadScenario(this.currentScenario);
        
        // Show all force options
        document.querySelectorAll('.force-option').forEach(option => {
            option.style.display = 'inline-block';
        });
        
        // Hide angle display when resetting
        this.hideAngleDisplay();
    }
    
    clearForceVectors() {
        const vectorsGroup = document.getElementById('force-vectors');
        // Clear both placed forces and given forces
        const allVectors = vectorsGroup.querySelectorAll('[id^="placed-"], [id^="given-"]');
        allVectors.forEach(vector => vector.remove());
        
        // Clean up ghost vector if exists
        if (this.ghostVector) {
            this.ghostVector.remove();
            this.ghostVector = null;
        }
    }
    
    showFeedback(message, type) {
        const feedbackElement = document.getElementById('feedback-message');
        feedbackElement.textContent = message;
        feedbackElement.className = type;
        
        // Auto-clear after 3 seconds for success messages
        if (type === 'success') {
            setTimeout(() => {
                feedbackElement.textContent = '';
                feedbackElement.className = '';
            }, 3000);
        }
    }
    
    getDirectionText(direction) {
        const directions = {
            'up': 'מעלה',
            'down': 'מטה', 
            'left': 'שמאלה',
            'right': 'ימינה',
            0: 'ימינה',
            90: 'מעלה', 
            180: 'שמאלה',
            210: '210° (שמאלה ומטה)',
            270: 'מטה',
            30: '30° מהאופקי',
            36.86: '36.86° מהאופקי',
            53.2: '53.2° מהאופקי',
            143.14: '143.14° (36.86° מעל הציר השלילי)',
            330: '330° (30° מתחת לאופקי)'
        };
        return directions[direction] || `${direction}°`;
    }
    
    addVectorArrow(forceName) {
        return `<span style="position: relative; display: inline-block;">
            ${forceName}
            <span style="position: absolute; top: -6px; left: 50%; transform: translateX(-50%); font-size: 10px;">→</span>
        </span>`;
    }
    
    addVectorSymbol(forceName) {
        return `${forceName}→`;
    }
    
    calculateVectorLength(forceValue) {
        // Extract numeric value from string like "50N"
        const numericValue = parseInt(forceValue.replace('N', ''));
        // Each unit = 2 pixels (0.5cm ≈ 2 pixels)
        return numericValue * 2;
    }
    
    createVectorDivisions(startPoint, endPoint, forceValue, color) {
        const divisions = [];
        const numericValue = parseInt(forceValue.replace('N', ''));
        
        // Create division marks every 10N
        for (let i = 1; i < numericValue / 10; i++) {
            const ratio = (i * 10) / numericValue;
            const divisionPoint = {
                x: startPoint.x + (endPoint.x - startPoint.x) * ratio,
                y: startPoint.y + (endPoint.y - startPoint.y) * ratio
            };
            
            // Create small perpendicular line for division mark
            const perpLength = 8;
            const dx = endPoint.x - startPoint.x;
            const dy = endPoint.y - startPoint.y;
            const length = Math.sqrt(dx * dx + dy * dy);
            
            const perpX = (-dy / length) * perpLength / 2;
            const perpY = (dx / length) * perpLength / 2;
            
            const divisionLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            divisionLine.setAttribute('x1', divisionPoint.x - perpX);
            divisionLine.setAttribute('y1', divisionPoint.y - perpY);
            divisionLine.setAttribute('x2', divisionPoint.x + perpX);
            divisionLine.setAttribute('y2', divisionPoint.y + perpY);
            divisionLine.setAttribute('stroke', color);
            divisionLine.setAttribute('stroke-width', '2');
            divisionLine.setAttribute('opacity', '0.7');
            
            divisions.push(divisionLine);
        }
        
        return divisions;
    }
    
    updateAngleDisplay(angle) {
        const angleDisplay = document.getElementById('angle-display');
        angleDisplay.textContent = `זווית: ${angle} מעלות`;
        angleDisplay.setAttribute('opacity', '1');
    }
    
    hideAngleDisplay() {
        const angleDisplay = document.getElementById('angle-display');
        angleDisplay.setAttribute('opacity', '0');
    }
}

// Initialize simulation when page loads
document.addEventListener('DOMContentLoaded', () => {
    new PhysicsSimulation();
}); 