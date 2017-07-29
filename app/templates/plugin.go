// DOCS: https://golang.org/pkg/plugin/
//
// NOTE: all golang plugins must live in the main package
package main

// dependencies
import (
  "errors"
  "context"
	"net/http"

  opentracing "github.com/opentracing/opentracing-go"
  "github.com/northwesternmutual/kanali/spec"
  "github.com/northwesternmutual/kanali/utils"
	"github.com/northwesternmutual/kanali/controller"
)

// internal struct that we will export later
type <%= pluginInternal %> struct{}

// OnRequest intercepts a request before it is proxied upstream
func (k <%= pluginInternal %>) OnRequest(ctx context.Context, p spec.APIProxy, c controller.Controller, r *http.Request, span opentracing.Span) error {
  return &utils.StatusError{Code: http.StatusUnauthorized, Err: errors.New("sample error")}
}

// OnResponse intercepts a request after it has been proxied upstream
// but before a response it returned to the client
func (k <%= pluginInternal %>) OnResponse(ctx context.Context, p spec.APIProxy, c controller.Controller, r *http.Request, resp *http.Response, span opentracing.Span) error {
	return nil
}

// export our plugin
var Plugin <%= pluginInternal %>
