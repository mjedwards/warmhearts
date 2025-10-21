#!/bin/bash

echo "Final verification of unused components"
echo "======================================"

unused_components=(
    "src/components/homeMainContent/atoms/layout.js"
    "src/components/forms/shareStory.js" 
    "src/components/takeAction/atoms/miniGrid.js"
    "src/components/imageGallery/imageCarousel.js"
    "src/components/hero/atoms/carousel.js"
    "src/components/events/EventsGallery.js"
)

for comp in "${unused_components[@]}"; do
    echo "Verifying: $comp"
    
    # Get component name variations
    filename=$(basename "$comp" .js)
    
    # Check for any reference patterns we might have missed
    echo "  Checking for '$filename' references:"
    
    # Search for references in all text-based files
    ref_count=$(find src -type f \( -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx" -o -name "*.json" \) ! -path "$comp" -exec grep -l "$filename" {} \; 2>/dev/null | wc -l)
    
    if [ $ref_count -eq 0 ]; then
        echo "  ✅ CONFIRMED UNUSED - No references found"
    else
        echo "  ❌ POTENTIAL USAGE FOUND - $ref_count references"
        find src -type f \( -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx" -o -name "*.json" \) ! -path "$comp" -exec grep -l "$filename" {} \; 2>/dev/null
    fi
    echo "---"
done
