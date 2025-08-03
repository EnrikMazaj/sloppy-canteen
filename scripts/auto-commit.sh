#!/bin/bash

# Auto-commit script for Sloppy Canteen
# This script analyzes git changes and generates appropriate commit messages

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Sloppy Canteen Auto-Commit Script${NC}"
echo "==========================================="

# Check if we're in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo -e "${RED}❌ Error: Not in a git repository${NC}"
    exit 1
fi

# Check if there are any changes
if git diff --quiet && git diff --cached --quiet; then
    echo -e "${YELLOW}⚠️  No changes to commit${NC}"
    exit 0
fi

# Function to generate commit message based on file changes
generate_commit_message() {
    local added_files=$(git diff --cached --name-only --diff-filter=A)
    local modified_files=$(git diff --cached --name-only --diff-filter=M)
    local deleted_files=$(git diff --cached --name-only --diff-filter=D)
    local renamed_files=$(git diff --cached --name-only --diff-filter=R)
    
    local commit_msg=""
    local commit_type=""
    local scope=""
    local description=""
    
    # Analyze file patterns to determine commit type
    if echo "$added_files" | grep -q "src/app/.*page\.tsx"; then
        commit_type="feat"
        scope="pages"
        description="add new page"
    elif echo "$added_files" | grep -q "src/components/"; then
        commit_type="feat"
        scope="components"
        description="add new component"
    elif echo "$modified_files" | grep -q "src/app/.*page\.tsx"; then
        commit_type="feat"
        scope="pages"
        description="update page content"
    elif echo "$modified_files" | grep -q "src/components/"; then
        commit_type="fix"
        scope="components"
        description="update component"
    elif echo "$modified_files" | grep -q "README\.md"; then
        commit_type="docs"
        description="update README"
    elif echo "$modified_files" | grep -q "package\.json"; then
        commit_type="build"
        description="update dependencies"
    elif echo "$added_files" | grep -q "\.css\|\.scss"; then
        commit_type="style"
        description="add styling"
    elif echo "$modified_files" | grep -q "\.css\|\.scss"; then
        commit_type="style"
        description="update styling"
    elif echo "$deleted_files" | wc -l | grep -q "[1-9]"; then
        commit_type="refactor"
        description="remove unused files"
    else
        commit_type="chore"
        description="update codebase"
    fi
    
    # Build commit message
    if [ ! -z "$scope" ]; then
        commit_msg="${commit_type}(${scope}): ${description}"
    else
        commit_msg="${commit_type}: ${description}"
    fi
    
    # Add more specific details based on actual files
    if [ ! -z "$added_files" ]; then
        local file_count=$(echo "$added_files" | wc -l)
        if [ $file_count -eq 1 ]; then
            local filename=$(basename "$added_files")
            commit_msg="${commit_msg} - ${filename}"
        elif [ $file_count -gt 1 ]; then
            commit_msg="${commit_msg} (${file_count} files)"
        fi
    fi
    
    echo "$commit_msg"
}

# Stage all changes if nothing is staged
if git diff --cached --quiet; then
    echo -e "${YELLOW}📋 Staging all changes...${NC}"
    git add .
fi

# Show what will be committed
echo -e "${BLUE}📝 Changes to commit:${NC}"
git diff --cached --name-status

echo ""

# Generate commit message
COMMIT_MSG=$(generate_commit_message)

echo -e "${GREEN}💡 Generated commit message:${NC}"
echo "   $COMMIT_MSG"
echo ""

# Ask for confirmation
read -p "Do you want to commit with this message? [Y/n]: " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Yy]$ ]] || [[ -z $REPLY ]]; then
    git commit -m "$COMMIT_MSG"
    echo -e "${GREEN}✅ Committed successfully!${NC}"
    
    # Ask if user wants to push
    read -p "Do you want to push to remote? [y/N]: " -n 1 -r
    echo ""
    
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        git push
        echo -e "${GREEN}🚀 Pushed to remote successfully!${NC}"
    fi
else
    echo -e "${YELLOW}❌ Commit cancelled${NC}"
    exit 1
fi
