#!/usr/bin/env node

const { execSync } = require('child_process');
const readline = require('readline');

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  blue: '\x1b[34m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  bold: '\x1b[1m'
};

// Helper function to execute git commands
function gitCommand(command) {
  try {
    return execSync(command, { encoding: 'utf-8' }).trim();
  } catch (error) {
    return null;
  }
}

// Helper function to ask yes/no questions
function askQuestion(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer.toLowerCase().trim());
    });
  });
}

// Generate commit message based on file changes
function generateCommitMessage() {
  const addedFiles = gitCommand('git diff --cached --name-only --diff-filter=A') || '';
  const modifiedFiles = gitCommand('git diff --cached --name-only --diff-filter=M') || '';
  const deletedFiles = gitCommand('git diff --cached --name-only --diff-filter=D') || '';

  let commitType = 'chore';
  let scope = '';
  let description = 'update codebase';

  // Analyze file patterns
  if (addedFiles.includes('src/app/') && addedFiles.includes('page.tsx')) {
    commitType = 'feat';
    scope = 'pages';
    description = 'add new page';
  } else if (addedFiles.includes('src/components/')) {
    commitType = 'feat';
    scope = 'components';
    description = 'add new component';
  } else if (modifiedFiles.includes('src/app/') && modifiedFiles.includes('page.tsx')) {
    commitType = 'feat';
    scope = 'pages';
    description = 'update page content';
  } else if (modifiedFiles.includes('src/components/')) {
    commitType = 'fix';
    scope = 'components';
    description = 'update component';
  } else if (modifiedFiles.includes('README.md')) {
    commitType = 'docs';
    description = 'update README';
  } else if (modifiedFiles.includes('package.json')) {
    commitType = 'build';
    description = 'update dependencies';
  } else if (addedFiles.match(/\.(css|scss|tailwind)/) || modifiedFiles.match(/\.(css|scss|tailwind)/)) {
    commitType = 'style';
    description = addedFiles ? 'add styling' : 'update styling';
  } else if (deletedFiles) {
    commitType = 'refactor';
    description = 'remove unused files';
  }

  // Handle scripts specifically for Sloppy Canteen
  if (addedFiles.includes('scripts/') || modifiedFiles.includes('scripts/')) {
    commitType = 'build';
    scope = 'scripts';
    description = 'add/update build scripts';
  }

  // Build commit message
  let commitMsg = scope ? `${commitType}(${scope}): ${description}` : `${commitType}: ${description}`;

  // Add file details
  const addedCount = addedFiles ? addedFiles.split('\n').filter(f => f.trim()).length : 0;
  const modifiedCount = modifiedFiles ? modifiedFiles.split('\n').filter(f => f.trim()).length : 0;

  if (addedCount === 1) {
    const fileName = addedFiles.split('/').pop();
    commitMsg += ` - ${fileName}`;
  } else if (addedCount > 1) {
    commitMsg += ` (${addedCount} new files)`;
  }

  if (modifiedCount > 0 && addedCount === 0) {
    commitMsg += ` (${modifiedCount} files)`;
  }

  return commitMsg;
}

// Main function
async function main() {
  console.log(`${colors.blue}${colors.bold}🚀 Sloppy Canteen Auto-Commit Script${colors.reset}`);
  console.log('===========================================');

  // Check if in git repository
  if (!gitCommand('git rev-parse --git-dir')) {
    console.log(`${colors.red}❌ Error: Not in a git repository${colors.reset}`);
    process.exit(1);
  }

  // Check for changes
  const hasUnstagedChanges = gitCommand('git diff --name-only') !== '';
  const hasStagedChanges = gitCommand('git diff --cached --name-only') !== '';

  if (!hasUnstagedChanges && !hasStagedChanges) {
    console.log(`${colors.yellow}⚠️  No changes to commit${colors.reset}`);
    process.exit(0);
  }

  // Stage changes if needed
  if (!hasStagedChanges && hasUnstagedChanges) {
    console.log(`${colors.yellow}📋 Staging all changes...${colors.reset}`);
    execSync('git add .');
  }

  // Show changes
  console.log(`${colors.blue}📝 Changes to commit:${colors.reset}`);
  const changes = gitCommand('git diff --cached --name-status');
  console.log(changes);
  console.log('');

  // Generate commit message
  const commitMsg = generateCommitMessage();
  console.log(`${colors.green}💡 Generated commit message:${colors.reset}`);
  console.log(`   ${commitMsg}`);
  console.log('');

  // Ask for confirmation
  const answer = await askQuestion('Do you want to commit with this message? [Y/n]: ');
  
  if (answer === '' || answer === 'y' || answer === 'yes') {
    try {
      execSync(`git commit -m "${commitMsg}"`);
      console.log(`${colors.green}✅ Committed successfully!${colors.reset}`);

      // Ask about pushing
      const pushAnswer = await askQuestion('Do you want to push to remote? [y/N]: ');
      
      if (pushAnswer === 'y' || pushAnswer === 'yes') {
        execSync('git push');
        console.log(`${colors.green}🚀 Pushed to remote successfully!${colors.reset}`);
      }
    } catch (error) {
      console.log(`${colors.red}❌ Error committing: ${error.message}${colors.reset}`);
      process.exit(1);
    }
  } else {
    console.log(`${colors.yellow}❌ Commit cancelled${colors.reset}`);
    process.exit(1);
  }
}

// Run the script
main().catch(console.error);
