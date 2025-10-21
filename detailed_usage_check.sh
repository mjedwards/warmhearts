#!/bin/bash

echo "Detailed Component Usage Analysis"
echo "=================================="

# List of all component files
component_files=$(find src/components -name "*.js")

# Array to store unused components
declare -a unused_components

for component_file in $component_files; do
    # Extract filename and component name
    filename=$(basename "$component_file")
    component_name=$(basename "$component_file" .js)
    
    echo "Checking: $component_file"
    echo "Component name: $component_name"
    
    # Count different types of usage
    import_count=$(find src -name "*.js" ! -path "$component_file" -exec grep -l "import.*$component_name" {} \; 2>/dev/null | wc -l)
    jsx_usage=$(find src -name "*.js" ! -path "$component_file" -exec grep -l "<$component_name" {} \; 2>/dev/null | wc -l)
    require_usage=$(find src -name "*.js" ! -path "$component_file" -exec grep -l "require.*$component_name" {} \; 2>/dev/null | wc -l)
    filename_usage=$(find src -name "*.js" ! -path "$component_file" -exec grep -l "$filename" {} \; 2>/dev/null | wc -l)
    
    total_usage=$((import_count + jsx_usage + require_usage + filename_usage))
    
    echo "  Import usage: $import_count"
    echo "  JSX usage: $jsx_usage"
    echo "  Require usage: $require_usage"
    echo "  Filename usage: $filename_usage"
    echo "  Total usage: $total_usage"
    
    if [ $total_usage -eq 0 ]; then
        unused_components+=("$component_file")
        echo "  STATUS: UNUSED"
    else
        echo "  STATUS: USED"
    fi
    echo "---"
done

echo ""
echo "FINAL REPORT - UNUSED COMPONENTS:"
echo "=================================="
if [ ${#unused_components[@]} -eq 0 ]; then
    echo "No unused components found!"
else
    for comp in "${unused_components[@]}"; do
        echo "UNUSED: $comp"
    done
fi
