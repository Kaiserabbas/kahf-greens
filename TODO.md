# TODO: Fix Image Modal Sizing

## Task
Fix the image modal sizing issue in the agriculture pages so images fit the screen when clicked.

## Files to Edit:
- [ ] src/pages/agriculture/PlanterPots.jsx - Fix modal image sizing
- [ ] src/pages/agriculture/PlanterBags.jsx - Fix modal image sizing
- [ ] src/components/AgricultureSubPageTemplate.jsx - Fix modal image sizing (affects: GreenHouses, Irrigation, Machinery, PumpsAndHoses, WaterSaving)

## Fix Details:
- Change modal container from `fixed inset-0 bg-black/95 z-50 flex items-center justify-center` to include proper constraints
- Change image from `max-w-full max-h-full object-contain` to `max-w-[95vw] max-h-[95vh] object-contain`

## Status: In Progress
