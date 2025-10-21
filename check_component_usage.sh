#!/bin/bash

echo "Checking component usage..."
echo "========================="

# Store results
unused_components=()

# Get all component files
component_files=$(find src/components -name "*.js")

for component_file in $component_files; do
    # Extract component name (filename without extension and path)
    component_name=$(basename "$component_file" .js)
    
    # Search for usage in all src files
    usage_count=$(find src -name "*.js" -exec grep -l "$component_name" {} \; | wc -l)
    
    # Check specific import patterns
    import_count=$(find src -name "*.js" -exec grep -l "import.*$component_name" {} \; | wc -l)
    
    # Check if used as JSX component
    jsx_count=$(find src -name "*.js" -exec grep -l "<$component_name" {} \; | wc -l)
    
    total_usage=$((usage_count + import_count + jsx_count))
    
    if [ $total_usage -le 1 ]; then
        echo "POTENTIALLY UNUSED: $component_file (mentions: $usage_count, imports: $import_count, jsx: $jsx_count)"
        unused_components+=("$component_file")
    fi
done

echo ""
echo "Summary of potentially unused components:"
echo "========================================"
for comp in "${unused_components[@]}"; do
    echo "$comp"
done
