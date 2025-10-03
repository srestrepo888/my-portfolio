// Content Validator - Ensures 100% adherence to content guidelines
import { ContentSafeguards } from '@/config/safeguards';

export interface ValidationResult {
  valid: boolean;
  errors: string[];
  warnings: string[];
}

export class ContentValidator {
  /**
   * Validates that paragraphs follow the 3-sentence rule
   */
  static validateParagraph(text: string): ValidationResult {
    const result: ValidationResult = {
      valid: true,
      errors: [],
      warnings: [],
    };

    if (!text || text.trim().length === 0) {
      result.valid = false;
      result.errors.push('Paragraph cannot be empty');
      return result;
    }

    // Split by periods, exclamation marks, or question marks
    const sentences = text.split(/[.!?]/).filter(s => s.trim().length > 0);
    
    // Check 3-sentence rule
    if (sentences.length > 3) {
      result.valid = false;
      result.errors.push(`Paragraph exceeds 3-sentence limit (found ${sentences.length} sentences)`);
    }

    // Check character limit
    if (text.length > 280) {
      result.valid = false;
      result.errors.push(`Paragraph exceeds 280 character limit (${text.length} characters)`);
    }

    // Check minimum length
    if (text.length < 50) {
      result.warnings.push(`Paragraph is very short (${text.length} characters)`);
    }

    return result;
  }

  /**
   * Validates project content structure
   */
  static validateProjectContent(content: any): ValidationResult {
    const result: ValidationResult = {
      valid: true,
      errors: [],
      warnings: [],
    };

    // Check required sections
    const requiredSections = ['context', 'scope', 'impact'];
    requiredSections.forEach(section => {
      if (!content[section]) {
        result.valid = false;
        result.errors.push(`Missing required section: ${section}`);
      }
    });

    // Check required fields
    const requiredFields = ['title', 'client', 'year', 'industry', 'practices'];
    requiredFields.forEach(field => {
      if (!content[field]) {
        result.valid = false;
        result.errors.push(`Missing required field: ${field}`);
      }
    });

    // Validate title length
    if (content.title) {
      if (content.title.length > 60) {
        result.valid = false;
        result.errors.push(`Title exceeds 60 character limit (${content.title.length} characters)`);
      }
      if (content.title.length < 10) {
        result.warnings.push(`Title is very short (${content.title.length} characters)`);
      }
    }

    // Validate subtitle length
    if (content.subtitle) {
      if (content.subtitle.length > 120) {
        result.valid = false;
        result.errors.push(`Subtitle exceeds 120 character limit (${content.subtitle.length} characters)`);
      }
      if (content.subtitle.length < 20) {
        result.warnings.push(`Subtitle is very short (${content.subtitle.length} characters)`);
      }
    }

    // Validate tags
    if (content.practices && content.practices.length > 3) {
      result.valid = false;
      result.errors.push(`Too many practice tags (${content.practices.length}, max: 3)`);
    }

    // Validate context paragraph
    if (content.context) {
      const contextValidation = this.validateParagraph(content.context);
      if (!contextValidation.valid) {
        result.valid = false;
        result.errors.push(...contextValidation.errors.map(e => `Context: ${e}`));
      }
      result.warnings.push(...contextValidation.warnings.map(w => `Context: ${w}`));
    }

    // Validate scope items
    if (content.scope && Array.isArray(content.scope)) {
      content.scope.forEach((item: string, index: number) => {
        const scopeValidation = this.validateParagraph(item);
        if (!scopeValidation.valid) {
          result.valid = false;
          result.errors.push(...scopeValidation.errors.map(e => `Scope item ${index + 1}: ${e}`));
        }
      });
    }

    // Validate impact items
    if (content.impact && Array.isArray(content.impact)) {
      content.impact.forEach((item: string, index: number) => {
        const impactValidation = this.validateParagraph(item);
        if (!impactValidation.valid) {
          result.valid = false;
          result.errors.push(...impactValidation.errors.map(e => `Impact item ${index + 1}: ${e}`));
        }
      });
    }

    return result;
  }

  /**
   * Validates image naming conventions
   */
  static validateImageName(filename: string): ValidationResult {
    const result: ValidationResult = {
      valid: true,
      errors: [],
      warnings: [],
    };

    // Check pattern
    const validPattern = /^[a-z0-9-]+\.(jpg|jpeg|png|webp)$/;
    if (!validPattern.test(filename)) {
      result.valid = false;
      result.errors.push('Image name must be lowercase, alphanumeric with hyphens only, and have a valid extension (jpg, jpeg, png, webp)');
    }

    // Check length
    if (filename.length > 50) {
      result.valid = false;
      result.errors.push(`Image name exceeds 50 character limit (${filename.length} characters)`);
    }

    // Check for descriptive name
    const nameWithoutExtension = filename.split('.')[0];
    if (nameWithoutExtension.length < 5) {
      result.warnings.push('Image name should be more descriptive');
    }

    return result;
  }

  /**
   * Validates all content in a batch
   */
  static validateAllContent(projects: any[]): {
    valid: boolean;
    totalErrors: number;
    totalWarnings: number;
    results: Map<string, ValidationResult>;
  } {
    const results = new Map<string, ValidationResult>();
    let totalErrors = 0;
    let totalWarnings = 0;

    projects.forEach(project => {
      const validation = this.validateProjectContent(project);
      results.set(project.id || project.title, validation);
      totalErrors += validation.errors.length;
      totalWarnings += validation.warnings.length;
    });

    return {
      valid: totalErrors === 0,
      totalErrors,
      totalWarnings,
      results,
    };
  }

  /**
   * Formats validation results for console output
   */
  static formatValidationResults(results: ValidationResult): string {
    let output = '';
    
    if (results.valid) {
      output += '✅ Content is valid\n';
    } else {
      output += '❌ Content validation failed\n';
    }

    if (results.errors.length > 0) {
      output += '\nErrors:\n';
      results.errors.forEach(error => {
        output += `  • ${error}\n`;
      });
    }

    if (results.warnings.length > 0) {
      output += '\nWarnings:\n';
      results.warnings.forEach(warning => {
        output += `  ⚠️  ${warning}\n`;
      });
    }

    return output;
  }
}

// Export for use in build scripts
export default ContentValidator;